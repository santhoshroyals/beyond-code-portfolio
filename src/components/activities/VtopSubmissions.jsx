
import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';

const submissions = [
  {
    id: 1,
    title: 'Assessment 1',
    file: '/submissions/advanced-python/assessment-1.pdf',
    downloadName: 'Assessment-1-Advanced-Python.pdf',
    pages: 19,
    type: 'PDF',
    description: [
      'Compared ANSI and Unicode text encoding.',
      'Explored PDF operations using PyPDF, including text extraction, table retrieval, page counting, and merging.',
      'Performed CSV data analysis using Pandas, including missing-value handling, visualization, and grouping.',
      'Processed audio using waveform visualization, low-pass filtering, and FFT-based frequency analysis.',
      'Explored video loading, frame extraction, and video information using Python.',
      'Implemented webpage scraping to extract content, word counts, and character counts.',
    ],
  },
  {
    id: 2,
    title: 'Assessment 2',
    file: '/submissions/advanced-python/assessment-2.pdf',
    downloadName: 'Assessment-2-Advanced-Python.pdf',
    pages: 11,
    type: 'PDF',
    description: [
      'Implemented binary search to find the first and last positions of a target element in a sorted array.',
      'Performed right rotation of an integer array by k positions.',
      'Identified duplicate elements in an array.',
      'Sorted an array containing 0s, 1s, and 2s.',
      'Counted the number of prime numbers less than a given integer.',
    ],
  },
  {
    id: 3,
    title: 'Assessment 3 – Project Review 1',
    file: '/submissions/advanced-python/assessment-3.pdf',
    downloadName: 'Assessment-3-Project-Review-1.pdf',
    pages: 3,
    type: 'PDF',
    description: [
      'Presented MedHUB – Patient-Doctor Remote Health Monitoring Gateway, with the initial frontend designed using Figma.',
      'Contributed to the AI Health Prediction Module, which analyzes patient information and estimates health risk.',
      'Included patient search and filtering based on age, disease, and risk level.',
      'Designed patient monitoring features displaying recent patients and their AI risk scores.',
      'Presented prediction details such as health status, AI confidence, priority level, and analysis time.',
      'Included future health risk predictions and personalized recommendations for diet, exercise, medication, and sleep.',
      'Added an option for doctors to download AI health prediction reports.',
    ],
  },
  {
    id: 4,
    title: 'Assessment 4',
    file: '/submissions/advanced-python/assessment-4.pdf',
    downloadName: 'Assessment-4-Advanced-Python.pdf',
    pages: 19,
    type: 'PDF',
    description: [
      'Developed a Student class using object-oriented programming to manage student details, scores, average marks, and final grades.',
      'Created a Gene class to represent DNA sequences, count nucleotide bases, calculate GC content, and validate DNA sequences.',
      'Implemented multithreading using Python threading, including thread creation, execution, arguments, and synchronization.',
      'Explored concurrent execution using ThreadPoolExecutor, submit(), as_completed(), and map().',
      'Implemented multithreading with queues, locks, and simultaneous task processing.',
      'Developed a food delivery order-processing example using multiple threads.',
      'Explored main threads, child threads, custom thread classes, and thread synchronization.',
    ],
  },
  {
    id: 5,
    title: 'Assessment 5',
    file: '/submissions/advanced-python/assessment-5.pdf',
    downloadName: 'Assessment-5-Advanced-Python.pdf',
    pages: 5,
    type: 'PDF',
    description: [
      'Created a Student class to manage student details, CGPA, certifications, and internship experience.',
      'Explored CSV file operations, including reading and writing student records using Python.',
      'Used Pandas to create and display DataFrames containing student names, ages, and CGPA values.',
      'Worked with structured student data using Python dictionaries and JSON operations.',
      'Practiced file handling, data access, serialization, and deserialization.',
    ],
  },
  {
    id: 6,
    title: 'Assessment 6',
    file: '/submissions/advanced-python/assessment-6.pdf',
    downloadName: 'Assessment-6-Advanced-Python.pdf',
    pages: 9,
    type: 'PDF',
    description: [
      'Created Pandas Series using student names and their corresponding academic programmes.',
      'Generated Series from lists, tuples, dictionaries, and custom indexes.',
      'Performed element-wise operations by adding CAT-I and CAT-II student marks.',
      'Identified integers, strings, and missing values (NaN) within a Pandas Series.',
      'Created a retail product information Series containing product names, prices, quantities, and expiry details.',
      'Constructed hierarchical MultiIndex Series using arrays, tuples, and Cartesian products.',
      'Created MultiIndex DataFrames using student names, subjects, and marks.',
      'Accessed hierarchical data using first-level and second-level indexes, including .loc.',
    ],
  },
  {
    id: 7,
    title: 'Assessment 7',
    file: '/submissions/advanced-python/assessment-7.pdf',
    downloadName: 'Assessment-7-Advanced-Python.pdf',
    pages: 5,
    type: 'PDF',
    description: [
      'Created a Pandas DataFrame containing city rankings, countries, and Green View Index (GVI) values for 34 cities.',
      'Used Pandas pivot_table() to group city data based on countries.',
      'Calculated average, minimum, and total GVI values using aggregation functions.',
      'Retrieved country-specific statistics, including the average GVI of the USA, minimum GVI of the Netherlands, and total GVI of Italy.',
      'Analyzed the top 30 ranked cities using value_counts() to identify the country with the highest representation.',
      'Identified the USA as the country with the maximum number of cities in the top 30, with 8 cities.',
    ],
  },
  {
    id: 8,
    title: 'Assessment 8 – Project Review',
    file: '/submissions/advanced-python/assessment-8.pdf',
    downloadName: 'Assessment-8-Advanced-Python.pdf',
    pages: 11,
    type: 'PDF',
    description: [
      'Developed the Intelligent Disaster Assessment and Resource Management System as part of a collaborative disaster response platform.',
      'Implemented incident severity assessment and priority-based disaster response.',
      'Designed shelter management functionality to monitor capacity and utilization.',
      'Integrated resource shortage detection and emergency resource monitoring.',
      'Used the Isolation Forest algorithm to identify unusual shelter utilization patterns.',
      'Developed an analytics dashboard to display disaster assessment results.',
      'Implemented a recommendation engine to generate actionable disaster response suggestions.',
      'Built the frontend using React.js and integrated it with a Python FastAPI backend through REST APIs.',
      'Tested dynamic API updates to verify changes in shelter utilization, status, anomaly detection, and recommendations.',
    ],
  },
  {
    id: 9,
    title: 'Assessment 9 – Project Review 2',
    file: '/submissions/advanced-python/assessment-9.pdf',
    downloadName: 'Assessment-9-Project-Review-2.pdf',
    pages: 4,
    type: 'PDF',
    description: [
      'Presented Project Review 2 for the Intelligent Disaster Data Interoperability and Emergency Response Coordination Platform.',
      'Explained the integration of disaster-related datasets into a unified platform.',
      'Demonstrated API-based data exchange between the Disaster Data Integration module and the Intelligent Disaster Assessment module.',
      'Presented a dashboard displaying an overall view of disaster information.',
      'Explained incident assessment features showing incident types, locations, and the number of people affected.',
      'Demonstrated shelter capacity monitoring and emergency resource availability.',
      'Presented analytics through charts and visual representations of disaster data.',
      'Explained the recommendation page for supporting emergency response planning.',
      'Integrated React, Vite, Python, FastAPI, Pandas, API connections, and Cloudflare Tunnel.',
    ],
  },
  {
    id: 10,
    title: 'Assessment 10 – Loan Approval Prediction',
    file: '/submissions/advanced-python/assessment-10.pdf',
    downloadName: 'Assessment-10-Loan-Approval-Prediction.pdf',
    pages: 11,
    type: 'PDF',
    description: [
      'Developed a Loan Approval Prediction System using Python, Pandas, and Scikit-learn.',
      'Loaded and explored a loan dataset containing 614 records and 13 attributes.',
      'Performed data inspection, statistical analysis, and data quality checks using Pandas.',
      'Analyzed loan approval patterns and visualized approved and rejected applications.',
      'Explored data preprocessing techniques, including categorical encoding and handling missing values.',
      'Prepared training and testing datasets using train_test_split().',
      'Implemented a Decision Tree Classifier for loan approval prediction.',
      'Explored model evaluation using accuracy, F1-score, and confusion matrix.',
    ],
  },
  {
    id: 11,
    category: 'Theory Component',
    title: 'Case Study I – Python difflib Module',
    file: '/submissions/advanced-python/Case-Study(ETH).pdf',
    downloadName: 'Case-Study-1-Advanced-Python.pdf',
    pages: 29,
    type: 'PDF',
    description: [
      'Explored the Python difflib module, including its introduction, purpose, history, development, and applications.',
      'Studied healthcare applications such as Electronic Health Record comparison, patient report verification, and prescription change detection.',
      'Explored financial applications involving bank statements, invoices, transaction records, and document verification.',
      'Implemented SequenceMatcher(), ratio(), and quick_ratio() for comparing patient reports and measuring text similarity.',
      'Used find_longest_match() and get_opcodes() to identify common text and differences between clinical reports.',
      'Generated HTML comparison reports using HtmlDiff.make_file().',
      'Implemented context_diff() and ndiff() for identifying line-by-line document changes.',
      'Used restore() to reconstruct original patient reports from comparison results.',
      'Applied get_close_matches() to suggest valid disease names for misspelled patient diagnoses.',
      'Implemented exception handling and input validation across the practical programs.',
    ],
  },
];

export default function VtopSubmissions() {
  return (
    <section
  id="submissions"
  className="py-10 sm:py-14 border-t border-ivory-200 scroll-mt-24"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-7">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-violet-500 mb-2">
            Academic Archive
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            VTOP Academic Submissions
          </h2>

          <p className="text-sm sm:text-base text-navy-600 mt-2 max-w-2xl">
            A collection of academic assignments, assessments, practical work,
            and course submissions.
          </p>
        </div>

        {/* Submission Cards */}
        <div className="space-y-4">
          {submissions.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-ivory-200 rounded-xl p-4 sm:p-5 shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                    <FileText size={21} className="text-violet-600" />
                  </div>

                  <div>
                    {item.category && (
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-500 mb-1">
                        {item.category}
                      </p>
                    )}

                    <h3 className="font-semibold text-base sm:text-lg text-navy-900">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-navy-500 mt-1">
                      {item.type} Document · {item.pages} Pages
                    </p>
                  </div>
                </div>

                {/* PDF Actions */}
                <div className="flex items-center gap-2 sm:gap-3 pl-0 lg:pl-4">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-violet-200 text-violet-700 hover:bg-violet-50 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Eye size={15} />
                    View PDF
                  </a>

                  <a
                    href={item.file}
                    download={item.downloadName}
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Download size={15} />
                    Download
                  </a>
                </div>
              </div>

              {/* Compact Assessment Overview */}
              <div className="mt-4 pt-4 border-t border-ivory-200">
                <h4 className="text-sm font-semibold text-navy-900 mb-3">
                  {item.category === 'Theory Component'
                    ? 'Case Study Overview'
                    : 'Assessment Overview'}
                </h4>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {item.description.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs sm:text-sm text-navy-600 leading-relaxed"
                    >
                      <span className="text-violet-500 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
