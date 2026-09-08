import { ProjectItem, SkillCategory, CertificationItem, EducationItem, CodeSnippet } from '../types';

export const PERSONAL_INFO = {
  name: 'Akriti Srivastava',
  brandName: 'Akriti',
  domain: '.dev',
  degree: 'B.Tech AI & Data Science',
  semester: '3rd Sem',
  university: 'REVA University',
  department: 'School of C&IT',
  location: 'Bengaluru, India',
  email: 'akritisrivas29@gmail.com',
  github: 'https://github.com/Akriti297',
  githubUsername: 'Akriti297',
  linkedin: 'https://linkedin.com/in/akriti-srivastava29',
  linkedinUsername: 'in/akriti-srivastava29',
  leetcode: 'https://leetcode.com/u/Akriti297/',
  leetcodeUsername: 'u/Akriti297',
  status: 'Open to Internships',
  editorialTagline: 'I build, learn & solve.',
  shortBio:
    'Curious and driven engineering student focused on low-level systems, DSA, practical software development, and modern data workflows. Currently preparing for software engineering internship opportunities.',
  quickSpecs: ['# C++17', '# Python 3.11', '# MySQL Relational', '# Systems in C'],
};

export const QUICK_STATS = [
  {
    label: 'SEMESTER 1',
    value: '8.96',
    subtext: 'SGPA Academic Honor',
  },
  {
    label: 'SEMESTER 2',
    value: '9.40',
    subtext: 'SGPA Departmental Distinction',
  },
  {
    label: 'UNDERGRADUATE',
    value: '3rd',
    subtext: 'Current Sem • REVA Univ',
  },
  {
    label: 'DSA PROBLEMS',
    value: '28+',
    subtext: 'LeetCode • Constant Practice',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    badge: 'Core',
    iconName: 'code',
    items: ['C', 'C++', 'Python', 'SQL', 'JavaScript', 'HTML5', 'CSS3'],
    footer: 'Strong low-level semantics',
  },
  {
    title: 'Dev & Tools',
    badge: 'Workflow',
    iconName: 'terminal',
    items: ['MySQL', 'Git', 'GitHub', 'VS Code', 'Linux Bash'],
    footer: 'Version control & query design',
  },
  {
    title: 'Core Theory',
    badge: 'Foundations',
    iconName: 'schema',
    items: ['DSA', 'OOP Principles', 'Data Analysis', 'Algorithmic Logic'],
    footer: 'Time/Space optimization',
  },
  {
    title: 'Familiar With',
    badge: 'Horizons',
    iconName: 'hub',
    items: ['Internet of Things (IoT)', 'GenAI Fundamentals', 'Prompt Eng', 'Data Visualization'],
    footer: 'Emerging computational spaces',
  },
];

export const CURRENTLY_LEARNING = ['C++ Systems', 'DSA & Pointers', 'JavaScript Modern', 'SQL / Relational DBs'];
export const EXPLORING = ['Full-Stack Architecture', 'Data Analysis & SciPy', 'AI & Generative Models'];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'shape-editor',
    projectNumber: 'PROJECT 01',
    category: 'C • Systems Programming',
    title: '2D Shape Editor',
    description:
      'A terminal-based 2D graphics engine built in C using a custom 25×70 interactive raster canvas. Implemented discrete shape rendering (rectangles, triangles, circles, lines), custom coordinate handling, buffer re-rendering loops, and shape deletion while exploring raw dynamic memory and 2D pointer matrices.',
    tags: ['C Language', 'Structures', '2D Arrays', 'Bresenham & Midpoint', 'Memory Buffer'],
    githubUrl: 'https://github.com/Akriti297',
  },
  {
    id: 'movie-platform',
    projectNumber: 'PROJECT 02',
    category: 'Full-Stack Development',
    badge: 'Currently Building',
    title: 'Movie Rating Platform',
    description:
      'Architecting a responsive full-stack web application designed for film enthusiasts to review, curate, and rate films. Features an intuitive front-end interface, user rating state management, and a relational MySQL backend configured with normalized schemas to manage titles, genres, and audience metrics.',
    tags: ['HTML5', 'CSS3 Flex/Grid', 'Vanilla JS', 'MySQL Backend', 'REST APIs'],
    githubUrl: 'https://github.com/Akriti297',
  },
];

export const DSA_SNIPPETS: CodeSnippet[] = [
  {
    id: 'two-sum',
    filename: 'two_sum_two_pointer.cpp',
    language: 'C++',
    standard: 'C++ Standard 20',
    approach: 'Two Pointer Approach',
    timeComplexity: 'O(n) Time',
    spaceComplexity: 'O(1) Auxiliary Space',
    explanation:
      'Finds 1-based indices of two numbers in a sorted array that add up to the target in linear time.',
    code: [
      '#include <vector>',
      'using namespace std;',
      '',
      '// Two Pointer Approach: O(n) Time, O(1) Auxiliary Space',
      'vector<int> twoSumSorted(vector<int>& nums, int target) {',
      '    int left = 0, right = nums.size() - 1;',
      '    while (left < right) {',
      '        int sum = nums[left] + nums[right];',
      '        if (sum == target) return {left + 1, right + 1};',
      '        else if (sum < target) left++;',
      '        else right--;',
      '    }',
      '    return {-1, -1};',
      '}',
    ],
  },
  {
    id: 'binary-search',
    filename: 'binary_search.cpp',
    language: 'C++',
    standard: 'C++ Standard 20',
    approach: 'Divide and Conquer',
    timeComplexity: 'O(log n) Time',
    spaceComplexity: 'O(1) Auxiliary Space',
    explanation:
      'Locates the index of an element in logarithmic time using bounded middle calculation to avoid integer overflow.',
    code: [
      '#include <vector>',
      'using namespace std;',
      '',
      '// Logarithmic Search: O(log n) Time, O(1) Space',
      'int binarySearch(const vector<int>& arr, int target) {',
      '    int low = 0, high = arr.size() - 1;',
      '    while (low <= high) {',
      '        int mid = low + (high - low) / 2;',
      '        if (arr[mid] == target) return mid;',
      '        else if (arr[mid] < target) low = mid + 1;',
      '        else high = mid - 1;',
      '    }',
      '    return -1;',
      '}',
    ],
  },
  {
    id: 'graph-bfs',
    filename: 'graph_bfs.cpp',
    language: 'C++',
    standard: 'C++ Standard 20',
    approach: 'Breadth-First Traversal',
    timeComplexity: 'O(V + E) Time',
    spaceComplexity: 'O(V) Space',
    explanation:
      'Explores level-by-level shortest paths in unweighted graphs using a queue and visitation vector.',
    code: [
      '#include <vector>',
      '#include <queue>',
      'using namespace std;',
      '',
      '// Graph BFS: O(V + E) Time, O(V) Space',
      'void traverseGraph(int src, const vector<vector<int>>& adj, int n) {',
      '    vector<bool> vis(n, false);',
      '    queue<int> q; q.push(src); vis[src] = true;',
      '    while (!q.empty()) {',
      '        int u = q.front(); q.pop();',
      '        execute_node(u); // analytical visit',
      '        for (int v : adj[u]) {',
      '            if (!vis[v]) { vis[v] = true; q.push(v); }',
      '        }',
      '    }',
      '}',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'wadhwani',
    issuer: 'Wadhwani Foundation',
    title: 'Ignite Full Program',
    description:
      'Completed intensive coursework focused on entrepreneurial leadership, business modeling, agile product framing, design thinking, and collaborative professional development.',
    verified: true,
    category: 'Business & Innovation',
  },
  {
    id: 'ibm-skillsbuild',
    issuer: 'IBM SkillsBuild',
    title: 'Data Science & AI Tracks',
    description:
      'Comprehensive foundation in Python programming for data science, exploratory data analysis, visual storytelling, and generative AI fundamentals.',
    modules: [
      'Python 101 Data Science',
      'Data Analysis Python',
      'Data Visualization',
      'GenAI Foundations',
    ],
    verified: true,
    category: 'Applied AI & Analytics',
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    period: '2025 – 2029 • Bengaluru, India',
    location: 'Bengaluru, India',
    institution: 'REVA University',
    status: 'Current: 3rd Semester',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    grades: [
      { label: 'Semester 1', value: '8.96 SGPA', highlight: true },
      { label: 'Semester 2', value: '9.40 SGPA', highlight: true },
    ],
    description:
      'Focusing on low-level systems in C/C++, algorithmic computational efficiency, relational database architectures, and applied statistics.',
  },
  {
    period: 'Secondary • Yelahanka',
    location: 'Yelahanka, Bengaluru',
    institution: 'Kendriya Vidyalaya AFS Yelahanka',
    status: 'Completed',
    degree: 'Senior Secondary Education',
    description:
      'Built foundational computational literacy and discovered a passion for software with early coursework in Python programming and MySQL relational schemas.',
  },
];

export const CAREER_ROADMAP_STEPS = [
  {
    number: '01',
    title: 'Learn',
    description: 'Algorithms, dynamic memory, modern stack paradigms',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Full-stack web apps, C systems, backend relational stores',
  },
  {
    number: '03',
    title: 'Solve',
    description: 'Daily LeetCode challenges and pattern mastery in C++',
  },
  {
    number: '04',
    title: 'Contribute',
    description: 'Open-source documentation, peer reviews, bug fixes',
  },
  {
    number: '05',
    title: 'Intern',
    description: 'Software Engineering Intern delivering real customer value',
    isFinal: true,
  },
];
