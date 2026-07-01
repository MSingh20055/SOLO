/* ======================================================
   SOLO SYSTEM — 45 Day Placement Roadmap (NeetCode 250 Edition)
   ====================================================== */
import { LEETCODE_150 } from './leetcode150';
import { SQL_50 } from './sql50';

export const STORAGE_KEY = "soloSystemState_v3";
export const TOTAL_DAYS = 45;
export const BOSS_DAYS_1IDX = [7, 14, 21, 28, 35, 42, 45]; // 1-indexed days that are Boss Battles

/* ---------- NEETCODE 250, GROUPED EXACTLY AS NEETCODE ORGANIZES THEM ---------- */
/* Each problem is [name, leetcodeUrl] */

export const NEETCODE_GROUPS: any[] = [
  ["Arrays & Hashing", [["Contains Duplicate","https://leetcode.com/problems/contains-duplicate/"], ["Valid Anagram","https://leetcode.com/problems/valid-anagram/"], ["Two Sum","https://leetcode.com/problems/two-sum/"], ["Group Anagrams","https://leetcode.com/problems/group-anagrams/"], ["Top K Frequent Elements","https://leetcode.com/problems/top-k-frequent-elements/"], ["Encode and Decode Strings","https://leetcode.com/problems/encode-and-decode-strings/"], ["Product of Array Except Self","https://leetcode.com/problems/product-of-array-except-self/"], ["Valid Sudoku","https://leetcode.com/problems/valid-sudoku/"], ["Longest Consecutive Sequence","https://leetcode.com/problems/longest-consecutive-sequence/"], ["Merge Sorted Array","https://leetcode.com/problems/merge-sorted-array/"], ["Sort Colors","https://leetcode.com/problems/sort-colors/"], ["Concatenation of Array","https://leetcode.com/problems/concatenation-of-array/"], ["Replace Elements with Greatest Element on Right Side","https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/"], ["Is Subsequence","https://leetcode.com/problems/is-subsequence/"], ["Length of Last Word","https://leetcode.com/problems/length-of-last-word/"], ["Roman to Integer","https://leetcode.com/problems/roman-to-integer/"], ["Majority Element","https://leetcode.com/problems/majority-element/"], ["Move Zeroes","https://leetcode.com/problems/move-zeroes/"], ["Intersection of Two Arrays II","https://leetcode.com/problems/intersection-of-two-arrays-ii/"], ["First Unique Character in a String","https://leetcode.com/problems/first-unique-character-in-a-string/"]]],
  ["Two Pointers", [["Valid Palindrome","https://leetcode.com/problems/valid-palindrome/"], ["Two Sum II (Sorted Array)","https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"], ["3Sum","https://leetcode.com/problems/3sum/"], ["Container With Most Water","https://leetcode.com/problems/container-with-most-water/"], ["Trapping Rain Water","https://leetcode.com/problems/trapping-rain-water/"], ["Reverse String","https://leetcode.com/problems/reverse-string/"], ["Squares of a Sorted Array","https://leetcode.com/problems/squares-of-a-sorted-array/"], ["Backspace String Compare","https://leetcode.com/problems/backspace-string-compare/"]]],
  ["Sliding Window", [["Best Time to Buy & Sell Stock","https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"], ["Longest Substring Without Repeating Characters","https://leetcode.com/problems/longest-substring-without-repeating-characters/"], ["Longest Repeating Character Replacement","https://leetcode.com/problems/longest-repeating-character-replacement/"], ["Permutation in String","https://leetcode.com/problems/permutation-in-string/"], ["Minimum Window Substring","https://leetcode.com/problems/minimum-window-substring/"], ["Sliding Window Maximum","https://leetcode.com/problems/sliding-window-maximum/"], ["Maximum Average Subarray I","https://leetcode.com/problems/maximum-average-subarray-i/"], ["Fruit Into Baskets","https://leetcode.com/problems/fruit-into-baskets/"], ["Frequency of the Most Frequent Element","https://leetcode.com/problems/frequency-of-the-most-frequent-element/"]]],
  ["Stack", [["Valid Parentheses","https://leetcode.com/problems/valid-parentheses/"], ["Min Stack","https://leetcode.com/problems/min-stack/"], ["Evaluate Reverse Polish Notation","https://leetcode.com/problems/evaluate-reverse-polish-notation/"], ["Generate Parentheses","https://leetcode.com/problems/generate-parentheses/"], ["Daily Temperatures","https://leetcode.com/problems/daily-temperatures/"], ["Car Fleet","https://leetcode.com/problems/car-fleet/"], ["Largest Rectangle in Histogram","https://leetcode.com/problems/largest-rectangle-in-histogram/"], ["Asteroid Collision","https://leetcode.com/problems/asteroid-collision/"], ["Remove All Adjacent Duplicates In String","https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"], ["Decode String","https://leetcode.com/problems/decode-string/"], ["Simplify Path","https://leetcode.com/problems/simplify-path/"]]],
  ["Binary Search", [["Binary Search","https://leetcode.com/problems/binary-search/"], ["Search a 2D Matrix","https://leetcode.com/problems/search-a-2d-matrix/"], ["Koko Eating Bananas","https://leetcode.com/problems/koko-eating-bananas/"], ["Find Minimum in Rotated Sorted Array","https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"], ["Search in Rotated Sorted Array","https://leetcode.com/problems/search-in-rotated-sorted-array/"], ["Time Based Key-Value Store","https://leetcode.com/problems/time-based-key-value-store/"], ["Median of Two Sorted Arrays","https://leetcode.com/problems/median-of-two-sorted-arrays/"], ["Find First and Last Position of Element in Sorted Array","https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"], ["Search Insert Position","https://leetcode.com/problems/search-insert-position/"], ["Capacity To Ship Packages Within D Days","https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"]]],
  ["Linked List", [["Reverse Linked List","https://leetcode.com/problems/reverse-linked-list/"], ["Merge Two Sorted Lists","https://leetcode.com/problems/merge-two-sorted-lists/"], ["Reorder List","https://leetcode.com/problems/reorder-list/"], ["Remove Nth Node From End of List","https://leetcode.com/problems/remove-nth-node-from-end-of-list/"], ["Copy List with Random Pointer","https://leetcode.com/problems/copy-list-with-random-pointer/"], ["Add Two Numbers","https://leetcode.com/problems/add-two-numbers/"], ["Linked List Cycle","https://leetcode.com/problems/linked-list-cycle/"], ["Find the Duplicate Number","https://leetcode.com/problems/find-the-duplicate-number/"], ["LRU Cache (design)","https://leetcode.com/problems/lru-cache/"], ["Merge K Sorted Lists","https://leetcode.com/problems/merge-k-sorted-lists/"], ["Reverse Nodes in K-Group","https://leetcode.com/problems/reverse-nodes-in-k-group/"], ["Palindrome Linked List","https://leetcode.com/problems/palindrome-linked-list/"], ["Middle of the Linked List","https://leetcode.com/problems/middle-of-the-linked-list/"], ["Odd Even Linked List","https://leetcode.com/problems/odd-even-linked-list/"], ["Swap Nodes in Pairs","https://leetcode.com/problems/swap-nodes-in-pairs/"], ["Rotate List","https://leetcode.com/problems/rotate-list/"], ["Flatten a Multilevel Doubly Linked List","https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"]]],
  ["Trees", [["Invert Binary Tree","https://leetcode.com/problems/invert-binary-tree/"], ["Maximum Depth of Binary Tree","https://leetcode.com/problems/maximum-depth-of-binary-tree/"], ["Diameter of Binary Tree","https://leetcode.com/problems/diameter-of-binary-tree/"], ["Balanced Binary Tree","https://leetcode.com/problems/balanced-binary-tree/"], ["Same Tree","https://leetcode.com/problems/same-tree/"], ["Subtree of Another Tree","https://leetcode.com/problems/subtree-of-another-tree/"], ["Lowest Common Ancestor of a BST","https://leetcode.com/problems/lowest-common-ancestor-of-a-bst/"], ["Binary Tree Level Order Traversal","https://leetcode.com/problems/binary-tree-level-order-traversal/"], ["Binary Tree Right Side View","https://leetcode.com/problems/binary-tree-right-side-view/"], ["Count Good Nodes in Binary Tree","https://leetcode.com/problems/count-good-nodes-in-binary-tree/"], ["Validate Binary Search Tree","https://leetcode.com/problems/validate-binary-search-tree/"], ["Kth Smallest Element in a BST","https://leetcode.com/problems/kth-smallest-element-in-a-bst/"], ["Construct Tree from Preorder & Inorder","https://leetcode.com/problems/construct-tree-from-preorder-and-inorder/"], ["Binary Tree Maximum Path Sum","https://leetcode.com/problems/binary-tree-maximum-path-sum/"], ["Serialize and Deserialize Binary Tree","https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"], ["Symmetric Tree","https://leetcode.com/problems/symmetric-tree/"], ["Path Sum","https://leetcode.com/problems/path-sum/"], ["Sum Root to Leaf Numbers","https://leetcode.com/problems/sum-root-to-leaf-numbers/"], ["Binary Tree Zigzag Level Order Traversal","https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"], ["Flatten Binary Tree to Linked List","https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"], ["Convert Sorted Array to BST","https://leetcode.com/problems/convert-sorted-array-to-bst/"], ["House Robber III","https://leetcode.com/problems/house-robber-iii/"], ["Vertical Order Traversal of a Binary Tree","https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"], ["Boundary of Binary Tree","https://leetcode.com/problems/boundary-of-binary-tree/"]]],
  ["Heap / Priority Queue", [["Kth Largest Element in a Stream","https://leetcode.com/problems/kth-largest-element-in-a-stream/"], ["Last Stone Weight","https://leetcode.com/problems/last-stone-weight/"], ["K Closest Points to Origin","https://leetcode.com/problems/k-closest-points-to-origin/"], ["Kth Largest Element in an Array","https://leetcode.com/problems/kth-largest-element-in-an-array/"], ["Task Scheduler","https://leetcode.com/problems/task-scheduler/"], ["Design Twitter","https://leetcode.com/problems/design-twitter/"], ["Find Median from Data Stream","https://leetcode.com/problems/find-median-from-data-stream/"], ["Top K Frequent Words","https://leetcode.com/problems/top-k-frequent-words/"], ["Reorganize String","https://leetcode.com/problems/reorganize-string/"], ["Single-Threaded CPU","https://leetcode.com/problems/single-threaded-cpu/"], ["IPO","https://leetcode.com/problems/ipo/"]]],
  ["Backtracking", [["Subsets","https://leetcode.com/problems/subsets/"], ["Combination Sum","https://leetcode.com/problems/combination-sum/"], ["Permutations","https://leetcode.com/problems/permutations/"], ["Subsets II","https://leetcode.com/problems/subsets-ii/"], ["Combination Sum II","https://leetcode.com/problems/combination-sum-ii/"], ["Word Search","https://leetcode.com/problems/word-search/"], ["Palindrome Partitioning","https://leetcode.com/problems/palindrome-partitioning/"], ["Letter Combinations of a Phone Number","https://leetcode.com/problems/letter-combinations-of-a-phone-number/"], ["N-Queens","https://leetcode.com/problems/n-queens/"], ["Combinations","https://leetcode.com/problems/combinations/"], ["Sudoku Solver","https://leetcode.com/problems/sudoku-solver/"], ["Restore IP Addresses","https://leetcode.com/problems/restore-ip-addresses/"], ["Word Break II","https://leetcode.com/problems/word-break-ii/"]]],
  ["Tries", [["Implement Trie (Prefix Tree)","https://leetcode.com/problems/implement-trie/"], ["Design Add and Search Words Data Structure","https://leetcode.com/problems/design-add-and-search-words-data-structure/"], ["Word Search II","https://leetcode.com/problems/word-search-ii/"], ["Replace Words","https://leetcode.com/problems/replace-words/"], ["Maximum XOR of Two Numbers in an Array","https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"]]],
  ["Graphs", [["Number of Islands","https://leetcode.com/problems/number-of-islands/"], ["Clone Graph","https://leetcode.com/problems/clone-graph/"], ["Max Area of Island","https://leetcode.com/problems/max-area-of-island/"], ["Pacific Atlantic Water Flow","https://leetcode.com/problems/pacific-atlantic-water-flow/"], ["Surrounded Regions","https://leetcode.com/problems/surrounded-regions/"], ["Rotting Oranges","https://leetcode.com/problems/rotting-oranges/"], ["Walls and Gates","https://leetcode.com/problems/walls-and-gates/"], ["Course Schedule","https://leetcode.com/problems/course-schedule/"], ["Course Schedule II","https://leetcode.com/problems/course-schedule-ii/"], ["Redundant Connection","https://leetcode.com/problems/redundant-connection/"], ["Number of Connected Components","https://leetcode.com/problems/number-of-connected-components/"], ["Graph Valid Tree","https://leetcode.com/problems/graph-valid-tree/"], ["Word Ladder","https://leetcode.com/problems/word-ladder/"], ["Flood Fill","https://leetcode.com/problems/flood-fill/"], ["Is Graph Bipartite?","https://leetcode.com/problems/is-graph-bipartite/"], ["Find if Path Exists in Graph","https://leetcode.com/problems/find-if-path-exists-in-graph/"], ["All Paths From Source to Target","https://leetcode.com/problems/all-paths-from-source-to-target/"], ["Minimum Height Trees","https://leetcode.com/problems/minimum-height-trees/"], ["Evaluate Division","https://leetcode.com/problems/evaluate-division/"]]],
  ["Advanced Graphs", [["Reconstruct Itinerary","https://leetcode.com/problems/reconstruct-itinerary/"], ["Min Cost to Connect All Points","https://leetcode.com/problems/min-cost-to-connect-all-points/"], ["Network Delay Time","https://leetcode.com/problems/network-delay-time/"], ["Swim in Rising Water","https://leetcode.com/problems/swim-in-rising-water/"], ["Alien Dictionary","https://leetcode.com/problems/alien-dictionary/"], ["Cheapest Flights Within K Stops","https://leetcode.com/problems/cheapest-flights-within-k-stops/"], ["Path With Minimum Effort","https://leetcode.com/problems/path-with-minimum-effort/"], ["Number of Islands II","https://leetcode.com/problems/number-of-islands-ii/"], ["Critical Connections in a Network","https://leetcode.com/problems/critical-connections-in-a-network/"]]],
  ["1-D DP", [["Climbing Stairs","https://leetcode.com/problems/climbing-stairs/"], ["Min Cost Climbing Stairs","https://leetcode.com/problems/min-cost-climbing-stairs/"], ["House Robber","https://leetcode.com/problems/house-robber/"], ["House Robber II","https://leetcode.com/problems/house-robber-ii/"], ["Longest Palindromic Substring","https://leetcode.com/problems/longest-palindromic-substring/"], ["Palindromic Substrings","https://leetcode.com/problems/palindromic-substrings/"], ["Decode Ways","https://leetcode.com/problems/decode-ways/"], ["Coin Change","https://leetcode.com/problems/coin-change/"], ["Maximum Product Subarray","https://leetcode.com/problems/maximum-product-subarray/"], ["Word Break","https://leetcode.com/problems/word-break/"], ["Longest Increasing Subsequence","https://leetcode.com/problems/longest-increasing-subsequence/"], ["Partition Equal Subset Sum","https://leetcode.com/problems/partition-equal-subset-sum/"], ["Fibonacci Number","https://leetcode.com/problems/fibonacci-number/"], ["N-th Tribonacci Number","https://leetcode.com/problems/n-th-tribonacci-number/"], ["Delete and Earn","https://leetcode.com/problems/delete-and-earn/"], ["Maximum Sum Circular Subarray","https://leetcode.com/problems/maximum-sum-circular-subarray/"], ["Perfect Squares","https://leetcode.com/problems/perfect-squares/"], ["Integer Break","https://leetcode.com/problems/integer-break/"], ["Combination Sum IV","https://leetcode.com/problems/combination-sum-iv/"]]],
  ["2-D DP", [["Unique Paths","https://leetcode.com/problems/unique-paths/"], ["Longest Common Subsequence","https://leetcode.com/problems/longest-common-subsequence/"], ["Best Time to Buy/Sell Stock w/ Cooldown","https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"], ["Coin Change II","https://leetcode.com/problems/coin-change-ii/"], ["Target Sum","https://leetcode.com/problems/target-sum/"], ["Interleaving String","https://leetcode.com/problems/interleaving-string/"], ["Longest Increasing Path in a Matrix","https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"], ["Distinct Subsequences","https://leetcode.com/problems/distinct-subsequences/"], ["Edit Distance","https://leetcode.com/problems/edit-distance/"], ["Burst Balloons","https://leetcode.com/problems/burst-balloons/"], ["Regular Expression Matching","https://leetcode.com/problems/regular-expression-matching/"], ["Minimum Path Sum","https://leetcode.com/problems/minimum-path-sum/"], ["Triangle","https://leetcode.com/problems/triangle/"], ["Maximal Square","https://leetcode.com/problems/maximal-square/"], ["Dungeon Game","https://leetcode.com/problems/dungeon-game/"], ["Cherry Pickup","https://leetcode.com/problems/cherry-pickup/"], ["Knight Probability in Chessboard","https://leetcode.com/problems/knight-probability-in-chessboard/"], ["Stone Game","https://leetcode.com/problems/stone-game/"]]],
  ["Greedy", [["Maximum Subarray","https://leetcode.com/problems/maximum-subarray/"], ["Jump Game","https://leetcode.com/problems/jump-game/"], ["Jump Game II","https://leetcode.com/problems/jump-game-ii/"], ["Gas Station","https://leetcode.com/problems/gas-station/"], ["Hand of Straights","https://leetcode.com/problems/hand-of-straights/"], ["Merge Triplets to Form Target Triplet","https://leetcode.com/problems/merge-triplets-to-form-target-triplet/"], ["Partition Labels","https://leetcode.com/problems/partition-labels/"], ["Valid Parenthesis String","https://leetcode.com/problems/valid-parenthesis-string/"], ["Lemonade Change","https://leetcode.com/problems/lemonade-change/"], ["Boats to Save People","https://leetcode.com/problems/boats-to-save-people/"], ["Candy","https://leetcode.com/problems/candy/"]]],
  ["Intervals", [["Insert Interval","https://leetcode.com/problems/insert-interval/"], ["Merge Intervals","https://leetcode.com/problems/merge-intervals/"], ["Non-overlapping Intervals","https://leetcode.com/problems/non-overlapping-intervals/"], ["Meeting Rooms","https://leetcode.com/problems/meeting-rooms/"], ["Meeting Rooms II","https://leetcode.com/problems/meeting-rooms-ii/"], ["Minimum Interval to Include Each Query","https://leetcode.com/problems/minimum-interval-to-include-each-query/"], ["Employee Free Time","https://leetcode.com/problems/employee-free-time/"], ["Car Pooling","https://leetcode.com/problems/car-pooling/"], ["My Calendar I","https://leetcode.com/problems/my-calendar-i/"]]],
  ["Math & Geometry", [["Rotate Image","https://leetcode.com/problems/rotate-image/"], ["Spiral Matrix","https://leetcode.com/problems/spiral-matrix/"], ["Set Matrix Zeroes","https://leetcode.com/problems/set-matrix-zeroes/"], ["Happy Number","https://leetcode.com/problems/happy-number/"], ["Plus One","https://leetcode.com/problems/plus-one/"], ["Pow(x, n)","https://leetcode.com/problems/powx-n/"], ["Multiply Strings","https://leetcode.com/problems/multiply-strings/"], ["Detect Squares","https://leetcode.com/problems/detect-squares/"], ["Excel Sheet Column Number","https://leetcode.com/problems/excel-sheet-column-number/"], ["Sqrt(x)","https://leetcode.com/problems/sqrtx/"], ["Power of Three","https://leetcode.com/problems/power-of-three/"], ["Add Strings","https://leetcode.com/problems/add-strings/"], ["Max Points on a Line","https://leetcode.com/problems/max-points-on-a-line/"]]],
  ["Bit Manipulation", [["Single Number","https://leetcode.com/problems/single-number/"], ["Number of 1 Bits","https://leetcode.com/problems/number-of-1-bits/"], ["Counting Bits","https://leetcode.com/problems/counting-bits/"], ["Reverse Bits","https://leetcode.com/problems/reverse-bits/"], ["Missing Number","https://leetcode.com/problems/missing-number/"], ["Sum of Two Integers","https://leetcode.com/problems/sum-of-two-integers/"], ["Reverse Integer","https://leetcode.com/problems/reverse-integer/"], ["XOR Operation in an Array","https://leetcode.com/problems/xor-operation-in-an-array/"], ["Binary Number with Alternating Bits","https://leetcode.com/problems/binary-number-with-alternating-bits/"], ["Hamming Distance","https://leetcode.com/problems/hamming-distance/"], ["Total Hamming Distance","https://leetcode.com/problems/total-hamming-distance/"], ["Find the Difference","https://leetcode.com/problems/find-the-difference/"]]],
  ["Strings", [["Longest Common Prefix","https://leetcode.com/problems/longest-common-prefix/"], ["Group Shifted Strings","https://leetcode.com/problems/group-shifted-strings/"], ["Valid Palindrome II","https://leetcode.com/problems/valid-palindrome-ii/"], ["Minimum Add to Make Parentheses Valid","https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/"], ["Zigzag Conversion","https://leetcode.com/problems/zigzag-conversion/"], ["Compare Version Numbers","https://leetcode.com/problems/compare-version-numbers/"], ["String Compression","https://leetcode.com/problems/string-compression/"]]],
  ["Design", [["Design HashMap","https://leetcode.com/problems/design-hashmap/"], ["Design Circular Queue","https://leetcode.com/problems/design-circular-queue/"], ["Design Underground System","https://leetcode.com/problems/design-underground-system/"], ["Insert Delete GetRandom O(1)","https://leetcode.com/problems/insert-delete-getrandom-o1/"], ["Design Hit Counter","https://leetcode.com/problems/design-hit-counter/"]]],
];

export const NEETCODE_250: any[] = [];
NEETCODE_GROUPS.forEach(([pattern, problems]: any) => {
  problems.forEach(([name, url]: any) => NEETCODE_250.push({ name, pattern, url }));
});

/* ---------- CORE / BACKEND / PROJECT / AI CONTENT FOR EACH NON-BOSS DAY ---------- */
/* 38 entries, consumed in order on the 38 non-boss days.
   System Design SCHEMA tasks and interview Qs are embedded inline. */

export const DAY_CONTENT = [
  // Week 1 — Advanced JS & React Basics
  { core:["OS Intro — types: batch, multiprogramming, time-sharing","Q: Difference between a process and a program?"], webdev:["JS Closures & Lexical Scope", "Promises & Event Loop"], project:["Expense Tracker — setup Vite React app & UI"], ai:["LLM Intro — what is a Large Language Model"] },
  { core:["Process vs Thread, Context Switching","Q: What exactly happens during a context switch?"], webdev:["React Components, Props & JSX"], project:["Expense Tracker — build static components"], ai:["Tokens & Embeddings — how text becomes vectors"] },
  { core:["CPU Scheduling — FCFS, SJF, Round Robin, Priority","Q: Why can SJF cause starvation?"], webdev:["React State & useState Hook"], project:["Expense Tracker — implement add/delete transactions"], ai:["Vector Databases — Pinecone vs Chroma vs Weaviate"] },
  { core:["Synchronization — Mutex, Semaphore, Monitors","Q: Difference between a mutex and a semaphore?"], webdev:["React useEffect & Component Lifecycle"], project:["Expense Tracker — persist data to localStorage"], ai:["What is RAG (Retrieval Augmented Generation)?"] },
  { core:["Deadlocks — conditions, prevention, Banker's Algorithm","Q: What are the 4 necessary conditions for deadlock?"], webdev:["React Context API basics"], project:["Expense Tracker — refactor state to Context"], ai:["RAG pipeline — chunking strategies"] },
  { core:["Memory Management — Paging, Segmentation, Virtual Memory","Q: What is thrashing and what causes it?"], webdev:["Advanced Hooks (useMemo, useCallback)"], project:["Expense Tracker — add charts and filtering"], ai:["RAG pipeline — embedding + retrieval step"] },

  // Week 2 — React Advanced & APIs
  { core:["DBMS Architecture, Keys — Primary/Foreign/Candidate","Q: Candidate key vs primary key?"], webdev:["React Router — setup and nested routes"], project:["Weather Dashboard — scaffold & routing"], ai:["RAG pipeline — generation + prompt assembly"] },
  { core:["Normalization — 1NF / 2NF / 3NF / BCNF practice","Q: Why would you ever denormalize a schema?"], webdev:["Fetch API & Axios inside React"], project:["Weather Dashboard — fetch from OpenWeather API"], ai:["Build a tiny RAG demo (concept walkthrough)"] },
  { core:["ACID Properties & Transactions","Q: Explain Atomicity with a real example"], webdev:["Error handling & Loading states"], project:["Weather Dashboard — implement skeleton loaders"], ai:["Agentic AI — what makes an agent 'agentic'?"] },
  { core:["Isolation Levels — Read Committed, Repeatable Read, Serializable","Q: What is a dirty read vs a phantom read?"], webdev:["Custom Hooks"], project:["Weather Dashboard — build useFetch hook"], ai:["Agentic AI — tool calling, the concept"] },
  { core:["Indexes — B-Tree, Hash Index, when indexes hurt writes","Q: When could adding an index slow things down?"], webdev:["Zustand / Redux Toolkit Intro"], project:["Weather Dashboard — add global search history"], ai:["Agentic AI — planning vs execution loop"] },
  { core:["SQL Practice Set — 5 medium joins + window functions","Q: Write a query for the 2nd highest salary"], webdev:["React Performance (React.memo)"], project:["Weather Dashboard — UI polish with Framer Motion"], ai:["LLM function/tool calling — practice in code"] },

  // Week 3 — Node.js & Express
  { core:["OSI Model & TCP/IP stack","Q: Difference between TCP and UDP?"], webdev:["Node.js runtime & core modules"], project:["Blog API — init Express server"], ai:["Compare RAG vs Fine-tuning vs Prompting"] },
  { core:["DNS resolution & CDN basics","Q: What happens when you type a URL and hit Enter?"], webdev:["Express routing & HTTP verbs"], project:["Blog API — build CRUD endpoints for posts"], ai:["Evaluating RAG output — relevance metrics"] },
  { core:["Load Balancers — L4 vs L7, routing algorithms","Q: Round robin vs least-connections, when each wins?"], webdev:["Express Middleware"], project:["Blog API — add logging & error handling middleware"], ai:["Prompt Engineering — core techniques"] },
  { core:["System Design Basics — scalability, the CAP theorem","Q: Explain CAP theorem with a concrete example"], webdev:["REST API Design principles"], project:["Blog API — add pagination & filtering"], ai:["Prompt Engineering — few-shot & chain-of-thought"] },
  { core:["SQL vs NoSQL — when to choose which","Q: When would you pick NoSQL over a relational DB?"], webdev:["CORS & Security Headers (Helmet)"], project:["Blog API — connect a React frontend to test CORS"], ai:["Vector DB indexing — HNSW, the overview"] },
  { core:["Message Queues — Kafka vs RabbitMQ concepts","Q: Why put a queue between two services?"], webdev:["File uploads with Multer"], project:["Blog API — add image upload for posts"], ai:["Building an Agent with a single tool (concept)"] },

  // Week 4 — Databases & Auth
  { core:["LLD — SOLID Principles","Q: Explain Single Responsibility with an example"], webdev:["MongoDB & Mongoose schemas"], project:["Chat App — design User & Message schemas"], ai:["Agent memory — short-term vs long-term"] },
  { core:["Design Patterns — Singleton, Factory, Builder","Q: Why is Singleton often considered an anti-pattern?"], webdev:["NoSQL modeling (1:N, N:M)"], project:["Chat App — implement Room & Participant logic"], ai:["Multi-step Agent flow — chaining tools together"] },
  { core:["Design Patterns — Observer, Strategy, Decorator","Q: Observer pattern vs a Pub/Sub system — same thing?"], webdev:["Authentication vs Authorization"], project:["Chat App — implement user registration"], ai:["RAG evaluation — building a tiny test set"] },
  { core:["LLD Practice — design a Parking Lot (class diagram)","Q: How would you model different vehicle/slot types?"], webdev:["JWT (JSON Web Tokens)"], project:["Chat App — implement login with JWT"], ai:["End-to-end RAG mini build — plan the pipeline"] },
  { core:["LLD Practice — design a Splitwise (expense sharing)","Q: How do you compute and settle minimal balances?"], webdev:["Socket.io basics"], project:["Chat App — connect WebSockets for real-time messages"], ai:["Agentic AI — designing a research agent (practice)"] },
  { core:["LLD Practice — design a BookMyShow (seat booking)","Q: How do you prevent two users double-booking a seat?"], webdev:["Socket rooms & broadcasting"], project:["Chat App — typing indicators & online status"], ai:["Compare Agent frameworks — LangChain vs LlamaIndex (high level)"] },

  // Week 5 — Fullstack & Deployment
  { core:["Linux Fundamentals — filesystem, permissions, common commands","Q: Difference between chmod 755 and chmod 777?"], webdev:["Monorepo setup (Frontend + Backend)"], project:["E-Commerce — setup MERN monorepo"], ai:["Model serving — what it actually means (overview)"] },
  { core:["Linux — process management, systemd, cron","Q: How do you find which process is using a given port?"], webdev:["Stripe / Razorpay Payments API"], project:["E-Commerce — integrate payment gateway mock"], ai:["Choosing an embedding model — size vs accuracy tradeoffs"] },
  { core:["Cloud Basics — AWS EC2, S3, IAM & permissions","Q: What's the principle of least privilege?"], webdev:["Caching with Redis"], project:["E-Commerce — cache product catalog"], ai:["LLM cost & latency tradeoffs — model size, streaming"] },
  { core:["Kubernetes Concepts — Pods, Deployments, Services","Q: Pod vs Deployment vs Service — how do they relate?"], webdev:["Dockerizing a MERN app"], project:["E-Commerce — write Dockerfiles for React & Express"], ai:["Deploying a small AI feature behind an API (concept)"] },
  { core:["Distributed Systems — consistency models, CAP revisited","Q: Give a real example of 'eventual consistency'"], webdev:["CI/CD with GitHub Actions"], project:["E-Commerce — setup linting & test actions"], ai:["Schema Design — Notification System: Users, Devices, Templates, DeliveryLogs"] },
  { core:["Distributed Systems — consensus (Raft/Paxos, high level)","Q: Why do distributed systems need a consensus protocol?"], webdev:["Deployment (Vercel + Render/Railway)"], project:["E-Commerce — deploy to production"], ai:["Schema Design — Rate Limiter: token-bucket vs sliding-window storage"] },

  // Week 6 — Polish & Mock Cycles
  { core:["Resume Deep Dive — quantify every single bullet point","Q: 'Walk me through your resume'"], webdev:["Web Vitals & Performance Auditing"], project:["Polish E-Commerce — Lighthouse audit & fixes"], ai:["Schema Design — BookMyShow: Movies, Shows, Seats, Bookings, Payments"] },
  { core:["Behavioral — 'Tell me about a conflict with a teammate'","Q: Prepare a real conflict story using STAR"], webdev:["Web Security (XSS, CSRF, SQLi)"], project:["Security audit on your deployed apps"], ai:["Schema Design — Hotel Booking (OYO-style): Hotels, Rooms, Bookings, Pricing/Availability"] },
  { core:["MOCK CYCLE 1 — Full DSA round (45 min, 2-3 problems)","Reflect: which pattern slowed you down the most?"], webdev:["Mock Q&A — React Hooks & Context"], project:["Present Weather Dashboard (mock interview)"], ai:["Mock Q&A — RAG + Agents + Prompting"] },
  { core:["MOCK CYCLE 2 — Full System Design round (45 min)","Reflect: did you clarify requirements before designing?"], webdev:["Mock Q&A — Node, Express & DB Indexing"], project:["Present Chat App architecture (mock interview)"], ai:["Schema Design — RAG Product (Vector Search App): Documents, Chunks, Embeddings, QueryLogs"] },
  { core:["MOCK CYCLE 3 — Full Behavioral round (30 min)","Reflect: were your answers specific and quantified?"], webdev:["Mock Q&A — WebSockets & Caching"], project:["Present E-Commerce app (mock interview)"], ai:["Practice explaining RAG + Agents in plain English out loud"] },
  { core:["OS + DBMS rapid revision — 10 self-quiz questions","Drill your weakest 3 topics from Weeks 1-2"], webdev:["Fullstack rapid revision","Drill your weakest topics from Weeks 3-5"], project:["Final README pass on all projects"], ai:["AI / RAG / Agents rapid revision — 10 self-quiz questions"] },

  // Final stretch
  { core:["Final DSA Revision — drill your single weakest pattern"], webdev:["Final Fullstack Revision — rebuild a small API from memory"], project:["Deploy links + demo videos checklist for every project"], ai:["Final AI Revision — RAG + Agents + Prompting recap"] },
  { core:["Rest & Light Review Day — skim notes only, no new material"], webdev:["Rest & Light Review Day — skim System Design notes"], project:["Sleep well — no project work today"], ai:["Rest Day — light skim of RAG/Agent notes"] },
];

/* ---------- BUILD THE 45-DAY ROADMAP ---------- */

function buildRoadmap(): any[] {
  const roadmap: any[] = [];
  const dsaQueue = [...NEETCODE_250];
  const lc150Queue = [...LEETCODE_150];
  const sqlQueue = [...SQL_50];
  let contentIdx = 0;
  let recentForReview: any[] = [];

  // 38 non-boss days need to cover 250 problems → ~7 per day
  const CHUNK_SIZE = 7;

  for(let day = 1; day <= TOTAL_DAYS; day++){
    const isBoss = BOSS_DAYS_1IDX.includes(day);
    const isFinal = day === TOTAL_DAYS;

    if(isBoss){
      const reviewSet = recentForReview.slice(-8);
      const reviewText = (start,end) => {
        const slice = reviewSet.slice(start,end);
        return slice.length ? slice.map(p=>p.name).join(", ") : "recent problems";
      };
      roadmap.push({
        dsa: isFinal
          ? [{ text:"FINAL BOSS — Full 45-min mock DSA interview (2-3 problems, mixed patterns)" }]
          : [{ text:`Mock Contest — re-solve from memory: ${reviewText(0,4)}` },
             { text:`Mock Contest — re-solve from memory: ${reviewText(4,8)}` }],
        core: isFinal
          ? ["FINAL BOSS — Full mock interview: OS + DBMS + Networks rapid-fire Q&A"]
          : ["Mock Viva — rapid-fire Q&A on this week's Core CS topics"],
        webdev: isFinal
          ? ["FINAL BOSS — Full Stack System Design mock interview (45 min, end-to-end)"]
          : ["Mock Q&A — rapid-fire on this week's Web Dev topics"],
        project: isFinal
          ? ["FINAL BOSS — Present your strongest project end-to-end, no notes"]
          : ["Present this week's project work out loud (mock interview style)"],
        ai: isFinal
          ? ["FINAL BOSS — Explain RAG + Agents + Prompting to an interviewer, no notes"]
          : ["Mock Q&A — rapid-fire on this week's AI/RAG/Agents topics"],
        boss: true,
        leetcode150: lc150Queue.splice(0, Math.ceil(lc150Queue.length / (TOTAL_DAYS - day + 1))).map(p => ({ text: p.name, url: p.url })),
        sql: day <= 10 ? sqlQueue.splice(0, Math.ceil(sqlQueue.length / (10 - day + 1))).map(p => ({ text: p.name, url: p.url })) : [],
      });
    } else {
      const chunk = dsaQueue.splice(0, CHUNK_SIZE);
      recentForReview.push(...chunk);
      const c = DAY_CONTENT[contentIdx] || DAY_CONTENT[DAY_CONTENT.length - 1];
      contentIdx++;
      roadmap.push({
        dsa: chunk.length
          ? chunk.map(p => ({ text:`Solve: ${p.name} — ${p.pattern}`, url:p.url }))
          : [{ text:"Revision Day — redo your 3 weakest NeetCode problems so far" }],
        core: c.core,
        webdev: c.webdev,
        project: c.project,
        ai: c.ai,
        leetcode150: lc150Queue.splice(0, Math.ceil(lc150Queue.length / (TOTAL_DAYS - day + 1))).map(p => ({ text: p.name, url: p.url })),
        sql: day <= 10 ? sqlQueue.splice(0, Math.ceil(sqlQueue.length / (10 - day + 1))).map(p => ({ text: p.name, url: p.url })) : [],
      });
    }
  }
  return roadmap;
}

export const ROADMAP = buildRoadmap();

export const CAT_META = {
  dsa:         { label:"DSA",          icon:"🧮" },
  leetcode150: { label:"Top Interview Questions", icon:"🎯" },
  sql:         { label:"SQL",          icon:"💾" },
  core:        { label:"Core CS",      icon:"🗄️" },
  webdev:     { label:"Web Dev",      icon:"🌐" },
  project:     { label:"Project",      icon:"🏗️" },
  ai:          { label:"AI / ML",      icon:"🤖" },
};

export const RANKS = [
  { name:"E-Rank Hunter",         min:1,  max:7,  letter:"E" },
  { name:"D-Rank Hunter",         min:8,  max:14, letter:"D" },
  { name:"C-Rank Hunter",         min:15, max:21, letter:"C" },
  { name:"B-Rank Hunter",         min:22, max:28, letter:"B" },
  { name:"A-Rank Hunter",         min:29, max:35, letter:"A" },
  { name:"S-Rank Hunter",         min:36, max:43, letter:"S" },
  { name:"National Level Hunter", min:44, max:9999, letter:"★" },
];

export const BOSS_DAY_INDICES = BOSS_DAYS_1IDX.map(d => d - 1); // 0-indexed, for completed[] lookups

