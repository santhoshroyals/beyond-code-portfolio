
import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  Download
} from 'lucide-react';

export default function CourseworkAssignment() {
  const [imageError, setImageError] = useState(false);

  // Files are stored directly inside the public folder
  const imagePath = '/tree-coverage.png';
  const pdfPath = '/Tree-Coverage-Submission.pdf';

  const steps = [
    ['DataFrame Creation', 'Converted the raw city-wise data into a Pandas DataFrame.'],
    ['Country-wise Analysis', 'Used pivot_table() to calculate country-level statistics.'],
    ['Statistical Operations', 'Applied mean, minimum, maximum and sum aggregations.'],
    ['City Ranking', 'Used filtering and value_counts() to analyse the top 30 cities.'],
    ['Result Extraction', 'Used .loc and idxmin() to retrieve specific results.']
  ];

  return (
    <section id="coursework-assignment" className="py-20 sm:py-24 bg-ivory-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-violetAccent-700 mb-3">
            Coursework · Pandas Notebook · Individual Assignment
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif text-navy-950 mb-2">
            Tree Coverage Task
          </h2>

          <p className="text-sm text-navy-600">
            Green View Index Analysis Across 34 Cities
          </p>
        </div>

        {/* Tree Coverage Image */}
        <div className="bg-white border border-navy-200 rounded-xl p-4 mb-6">
          <h3 className="text-sm font-medium text-navy-900 mb-3">
            Cities with the most tree coverage
          </h3>

          {!imageError ? (
            <img
              src={imagePath}
              alt="Cities ranked by tree coverage"
              onError={() => setImageError(true)}
              className="w-full max-h-[520px] object-contain rounded-lg"
            />
          ) : (
            <div className="p-8 text-center bg-ivory-100 rounded-lg">
              <p className="text-sm text-red-700">
                Image could not be loaded.
              </p>
              <p className="text-xs text-navy-600 mt-2">
                Please verify that tree-coverage.png is inside the public folder.
              </p>
            </div>
          )}

          <p className="text-xs text-navy-500 mt-3">
            The ranking of cities by tree coverage.
          </p>
        </div>

        {/* Original VTOP Submission PDF */}
        <div className="bg-white border border-navy-200 rounded-xl p-5 mb-10">

          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Original VTOP Submission
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex items-center gap-3">
              <FileText className="w-7 h-7 text-navy-600 shrink-0" />

              <div>
                <p className="text-sm font-semibold text-navy-950">
                  Tree-Coverage-Submission.pdf
                </p>
                <p className="text-xs text-navy-500">
                  Original assignment submitted through VTOP
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-navy-950 text-white text-sm inline-flex items-center gap-2 hover:bg-navy-800 transition"
              >
                <ExternalLink className="w-4 h-4" />
                View PDF
              </a>

              <a
                href={pdfPath}
                download="Tree-Coverage-Submission.pdf"
                className="px-4 py-2 rounded-lg border border-navy-200 text-navy-900 text-sm inline-flex items-center gap-2 hover:bg-ivory-100 transition"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>

            </div>
          </div>
        </div>

        {/* Assignment Story and Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div className="md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest text-navy-500 mb-3">
              The Story
            </p>

            <p className="text-sm text-navy-800 leading-7 mb-4">
              Thirty-four cities were provided with their country and Green
              View Index values. I converted this raw data into a structured
              Pandas DataFrame and explored how tree coverage differed
              across cities and countries.
            </p>

            <p className="text-sm text-navy-800 leading-7">
              Using Pandas operations, I calculated country-wise statistics,
              compared city rankings and extracted specific results. The
              assignment helped me understand how raw data can be transformed
              into meaningful analytical insights.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-navy-500 mb-3">
              Concepts and Tools
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                'Python programming',
                'Pandas DataFrame',
                'pivot_table()',
                'Data aggregation',
                'Filtering and sorting',
                'value_counts()',
                '.loc and idxmin()',
                'Jupyter Notebook'
              ].map(item => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-md bg-[#e8eee5] text-xs text-navy-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Highlights */}
        <div className="border-y border-navy-200 py-6 mb-8">

          <p className="text-xs font-mono uppercase tracking-widest text-navy-500 mb-4">
            Highlights
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-navy-800">
            <p>• 34 cities analysed across different countries.</p>
            <p>• USA cities recorded an average GVI of 21.4125.</p>
            <p>• Netherlands minimum GVI: 20.6%.</p>
            <p>• Italy total GVI: 16.2%.</p>
            <p>• USA had the highest representation in the top 30 cities.</p>
          </div>

        </div>

        {/* Notebook Steps */}
        <div className="mb-8">

          <p className="text-xs font-mono uppercase tracking-widest text-navy-500 mb-5">
            The Notebook, Cell by Cell
          </p>

          <div className="space-y-5">
            {steps.map(([title, description], index) => (
              <div key={title} className="flex items-start gap-4">

                <div className="w-8 h-8 shrink-0 rounded-full border border-emerald-600 text-emerald-700 flex items-center justify-center text-xs font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <h4 className="text-sm font-serif font-bold text-navy-950">
                    {title}
                  </h4>

                  <p className="text-sm text-navy-700 mt-1">
                    {description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Submission and Learning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

          <div className="rounded-xl bg-[#f4f0e7] p-5">
            <h3 className="text-sm font-serif font-bold text-navy-950 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              Submission Status
            </h3>

            <p className="text-sm text-navy-700 leading-6">
              Completed the individual Tree Coverage Analysis assignment
              and submitted the work through VTOP.
            </p>
          </div>

          <div className="rounded-xl bg-[#f4f0e7] p-5">
            <h3 className="text-sm font-serif font-bold text-navy-950 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violetAccent-700" />
              Learning Experience
            </h3>

            <p className="text-sm text-navy-700 leading-6">
              This assignment strengthened my understanding of data
              manipulation, aggregation, filtering and extracting
              insights using Python Pandas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
