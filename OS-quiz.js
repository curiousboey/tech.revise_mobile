const osQuizQuestions = [
    {
        question: 'A scientist is designing an OS for a satellite\'s guidance system that must correct its trajectory every 10 milliseconds. A delay of even a few microseconds could cause the satellite to fail its mission. Which type of OS is most suitable for this application?',
        options: [
            'Multiprocessing OS',
            'Soft Real-time OS',
            'Hard Real-time OS',
            'Distributed OS'
        ],
        answer: 2,
        hint: 'Think about the consequences of a missed deadline.',
        detailedExplanation: 'A Hard Real-time Operating System is the correct choice because its primary function is to guarantee that time-critical operations are completed within a strict, predictable deadline. This is essential for systems where a missed deadline can lead to catastrophic failure, such as in a satellite guidance system. A soft real-time OS would be insufficient as it only prioritizes, but doesn\'t guarantee, timely completion.'
    },
    {
        question: 'Imagine you are running a single-processor computer and you have three applications open: a text editor, a web browser, and a music player. What is the fundamental OS function that allows you to seamlessly switch between these applications, seemingly running them all at once?',
        options: [
            'Multiprocessing',
            'Multitasking/Time-sharing',
            'Multiprogramming',
            'Batch Processing'
        ],
        answer: 1,
        hint: 'The name of this concept is an extension of multiprogramming that prioritizes interaction.',
        detailedExplanation: 'The ability to run multiple programs on a single CPU at the same time is a core function of modern operating systems known as multitasking or time-sharing. The OS uses a scheduler to allocate small time slices of the CPU to each program in a round-robin fashion. This rapid switching is so fast that it gives the user the illusion that all programs are running concurrently.'
    },
    {
        question: 'An operating system uses a single master CPU that handles all system-level tasks, and multiple other CPUs are dedicated solely to executing user applications. What type of multiprocessing is this?',
        options: [
            'Distributed Processing',
            'Symmetric Multiprocessing (SMP)',
            'Multitasking',
            'Asymmetric Multiprocessing (AMP)'
        ],
        answer: 3,
        hint: 'The processors are not treated equally in this architecture.',
        detailedExplanation: 'Asymmetric Multiprocessing (AMP) is an older model where one processor, the master, runs the operating system while the other processors, the slaves, are limited to executing user code. In contrast, Symmetric Multiprocessing (SMP), which is more common today, allows any processor to perform both OS and user tasks, leading to better load balancing.'
    },
    {
        question: 'A user on a Linux system enters the command `$ls -l` in the terminal to list files. Which core OS component is responsible for interpreting this command and executing the corresponding system call to the file system?',
        options: [
            'Memory Management',
            'Process Management',
            'User Interface/Command Interpreter',
            'Device Management'
        ],
        answer: 2,
        hint: 'This component is the intermediary between the user and the rest of the OS.',
        detailedExplanation: 'The command interpreter, or shell, is a critical OS component that acts as the user interface. It reads commands from the user (via a keyboard or script), parses them, and makes a system call to the appropriate part of the OS to perform the requested function, such as listing files via the file management component.'
    },
    {
        question: 'A company has a single, powerful server that hosts a variety of services, including a web server, a database server, and a file server. Multiple engineers can connect to this server at the same time and run their own applications. What two OS concepts are being demonstrated here?',
        options: [
            'Multitasking and Distributed OS',
            'Batch and Multiprocessing OS',
            'Multiprogramming and Multiuser OS',
            'Interactive and Real-time OS'
        ],
        answer: 2,
        hint: 'Think about how many people and how many jobs are involved.',
        detailedExplanation: 'This scenario describes a system that is both multiuser and multiprogramming. It is a multiuser system because multiple engineers can log in and use the server simultaneously. It is a multiprogramming system because it holds several jobs (web server, database, file server, and user applications) in memory at once, and the OS switches between them to keep the CPU busy.'
    },
    {
        question: 'Which of the following is the most significant disadvantage of a simple Batch Processing OS?',
        options: [
            'It cannot execute multiple jobs at the same time.',
            'It lacks user interaction and an immediate response.',
            'It is not secure.',
            'It cannot manage system resources.'
        ],
        answer: 1,
        hint: 'Consider the communication between the user and the system.',
        detailedExplanation: 'A batch processing system is designed to run jobs in a queue without user intervention. The user provides a job (e.g., a program to run) to the system, and the system executes it when it\'s ready. The most significant drawback is the lack of interactivity; the user has no way to interact with their program while it\'s running and must wait for the entire batch to complete before they can get a result.'
    },
    {
        question: 'What core OS function is most concerned with ensuring that an application running on your computer does not consume all available memory and prevent other applications from running?',
        options: [
            'Process Management',
            'File Management',
            'Device Management',
            'Memory Management'
        ],
        answer: 3,
        hint: 'This function is a core part of resource allocation.',
        detailedExplanation: 'Memory management is a crucial function of the OS. It is responsible for tracking which parts of memory are being used by which processes. The OS will allocate a specific, isolated block of memory to a process and ensure that it cannot access or modify the memory of other processes, which is a key aspect of system stability and protection.'
    },
    {
        question: 'A team of researchers is working on a high-performance computing problem that requires breaking down a single, complex task into many smaller sub-tasks. These sub-tasks can be executed independently on a cluster of networked computers. Which type of OS is best suited for this environment?',
        options: [
            'Multiprocessing OS',
            'Distributed OS',
            'Multiuser OS',
            'Multiprogramming OS'
        ],
        answer: 1,
        hint: 'The keyword here is a \'cluster of networked computers\'.',
        detailedExplanation: 'A Distributed Operating System is specifically designed for environments where a single task needs to be performed using the combined resources of multiple, separate computers on a network. It handles the complex task of communication, resource sharing, and job scheduling across the entire network, making the collection of machines function as one cohesive unit.'
    },
    {
        question: 'Which of the following scenarios is a definitive example of an OS Service?',
        options: [
            'An antivirus program scans for malware.',
            'A user-created Python script accesses a file on the hard drive.',
            'The OS provides an API for an application to send data over a network.',
            'The computer\'s fan automatically speeds up to cool the CPU.'
        ],
        answer: 2,
        hint: 'An OS service is a function the OS provides to a program, not a program itself.',
        detailedExplanation: 'An OS service is a fundamental capability provided by the operating system to simplify a programmer\'s job. By providing an Application Programming Interface (API), the OS allows developers to use pre-built functions for tasks like network communication, file I/O, or memory allocation without needing to write the complex code to handle these tasks from scratch. The other options describe applications or hardware functions that utilize these services.'
    },
    {
        question: 'A Multiprogramming OS keeps multiple jobs in main memory. What is the primary objective of this action?',
        options: [
            'To allow multiple users to access the system at the same time.',
            'To reduce the amount of memory needed for each job.',
            'To keep the CPU busy at all times.',
            'To provide a user-friendly graphical interface.'
        ],
        answer: 2,
        hint: 'Think about what happens when a program is waiting for an event, such as a file to be loaded.',
        detailedExplanation: 'Multiprogramming is a technique where the operating system loads multiple jobs into memory at the same time. The core purpose is to prevent the CPU from sitting idle. When one job needs to perform an I/O operation (like reading from a disk), the OS can quickly switch the CPU to another job that is ready to run, ensuring the CPU is always busy and maximizing its efficiency.'
    },
    {
        question: 'A computer system experiences a sudden freeze. The user cannot move the mouse or type commands. The OS is most likely experiencing a failure in which of its components?',
        options: [
            'File System Management',
            'Device Management',
            'Security Management',
            'Network Management'
        ],
        answer: 1,
        hint: 'Think about which component is responsible for handling input and output from peripherals.',
        detailedExplanation: 'A frozen computer system where the mouse and keyboard are unresponsive points to a failure in Device Management. This OS component is responsible for controlling all I/O devices via their respective drivers. A failure here would prevent the OS from processing input from the user\'s peripherals.'
    },
    {
        question: 'In a hospital, a program that monitors patient heart rates needs to have higher priority than a background program for updating system software. What OS mechanism is used to manage this priority?',
        options: [
            'Memory Paging',
            'CPU Scheduling',
            'File System Permissions',
            'Asymmetric Multiprocessing'
        ],
        answer: 1,
        hint: 'This mechanism determines which process gets to use the CPU and for how long.',
        detailedExplanation: 'CPU Scheduling is the OS mechanism that decides which process to run on the CPU and for how long. It uses algorithms to manage the execution of multiple processes, and in a scenario like a hospital monitoring system, it would assign a higher priority to the critical task (heart rate monitor) to ensure it gets the CPU time it needs, preempting less critical tasks like a software update.'
    },
    {
        question: 'Two processes, P1 and P2, both need to access a shared resource. P1 acquires the resource and holds it while waiting for another resource that P2 holds. Meanwhile, P2 holds its resource while waiting for the resource P1 holds. What is this scenario an example of?',
        options: [
            'Multitasking',
            'A Race Condition',
            'A Deadlock',
            'Starvation'
        ],
        answer: 2,
        hint: 'This is a state where two or more processes are blocked and cannot proceed.',
        detailedExplanation: 'This scenario is a classic example of a deadlock. A deadlock occurs when two or more processes are in a waiting state, and each process is holding a resource and waiting for another resource that is held by another waiting process. In this case, P1 and P2 are in a circular wait, causing a standstill.'
    },
    {
        question: 'An OS component is responsible for allocating and deallocating blocks of memory to processes. This component tracks which parts of memory are currently in use and by whom. What is this component called?',
        options: [
            'Process Manager',
            'File Manager',
            'Device Manager',
            'Memory Manager'
        ],
        answer: 3,
        hint: 'It deals with how and where a process\'s data is stored in the computer\'s primary storage.',
        detailedExplanation: 'The Memory Manager is the OS component that is responsible for managing the computer\'s main memory (RAM). Its key functions include keeping track of memory usage, deciding which processes to load into memory, and allocating/deallocating memory space as needed to prevent conflicts between processes.'
    },
    {
        question: 'What is the primary difference between Multiprogramming and Multitasking?',
        options: [
            'Multiprogramming is for multiple users, while multitasking is for a single user.',
            'Multiprogramming keeps the CPU busy, while multitasking provides the illusion of concurrent execution to the user.',
            'Multitasking requires a single CPU, while multiprogramming requires multiple CPUs.',
            'Multiprogramming uses time slices, while multitasking uses a simple queue.'
        ],
        answer: 1,
        hint: 'Think about the goal of each concept: one is about efficiency, the other is about a user experience.',
        detailedExplanation: 'The key distinction lies in their purpose. Multiprogramming\'s primary goal is to maximize CPU utilization by keeping it busy whenever a process is waiting for I/O. Multitasking (or time-sharing) extends this idea to provide a responsive, interactive experience by giving each user/process a short time slice, which creates the illusion that all tasks are running at the same time.'
    },
    {
        question: 'In a command-line interface, a user types `cat file.txt` to display the contents of a file. The OS function that allows the `cat` program to read the file data is an example of which OS service?',
        options: [
            'Process Management',
            'Communication',
            'File System Manipulation',
            'Error Detection'
        ],
        answer: 2,
        hint: 'The command is directly related to a file.',
        detailedExplanation: 'File System Manipulation is a core OS service that provides programs with the ability to interact with files and directories. The `cat` command, which reads the contents of `file.txt`, is directly using the OS\'s underlying file system services to perform this operation.'
    },
    {
        question: 'Which type of OS is most suitable for a supercomputer that needs to perform large-scale scientific calculations by breaking down a single problem into smaller parts and executing them on multiple processors within a single machine?',
        options: [
            'Distributed OS',
            'Multiprocessing OS',
            'Batch OS',
            'Multitasking OS'
        ],
        answer: 1,
        hint: 'The key here is multiple CPUs in a single system.',
        detailedExplanation: 'A Multiprocessing OS is designed to leverage multiple CPUs within a single computer system to execute tasks in parallel, thereby accelerating a single job or complex calculation. This is precisely the use case for a supercomputer tackling a high-performance computing problem. A distributed OS would be used if the processors were on separate, networked machines.'
    },
    {
        question: 'A computer virus spreads by attaching itself to an executable file and gaining unauthorized access to other files. Which OS component is designed to prevent this kind of unauthorized access?',
        options: [
            'Device Management',
            'Memory Management',
            'Security Management',
            'Process Management'
        ],
        answer: 2,
        hint: 'This component protects data and resources from unauthorized actions.',
        detailedExplanation: 'Security Management is a core function of the OS that ensures the integrity and confidentiality of the system. It uses mechanisms like user authentication, access control lists (ACLs), and file permissions to protect files and resources from unauthorized access, which would prevent a virus from spreading by attaching to other files.'
    },
    {
        question: 'A user opens a web browser. The OS creates a new instance of the program in memory and allocates resources to it. This entire sequence of actions is the responsibility of which OS component?',
        options: [
            'File Management',
            'Device Management',
            'Process Management',
            'Memory Management'
        ],
        answer: 2,
        hint: 'This component is responsible for the entire lifecycle of a program, from creation to termination.',
        detailedExplanation: 'Process Management is the OS component that oversees the creation, scheduling, and termination of processes. When a user launches a web browser, the process manager creates a new process, assigns it a Process ID (PID), allocates resources, and prepares it for execution. It manages the entire lifecycle of that program while it is running.'
    },
    {
        question: 'Which of the following describes the behavior of a Soft Real-time OS?',
        options: [
            'It guarantees that critical tasks will be completed on time without fail.',
            'It is primarily used in mission-critical applications where a missed deadline is catastrophic.',
            'It prioritizes time-critical tasks but may miss deadlines without causing a system failure.',
            'It operates without any user interaction.'
        ],
        answer: 2,
        hint: 'The term "soft" implies some leniency with deadlines.',
        detailedExplanation: 'A Soft Real-time Operating System is designed for systems where meeting deadlines is important but not absolutely critical. Missing a deadline for a task like a video stream frame might result in a temporary drop in quality but will not lead to a total system failure, unlike a hard real-time system where a missed deadline could be catastrophic.'
    },
    {
        question: 'What is the main advantage of Symmetric Multiprocessing (SMP) over Asymmetric Multiprocessing (AMP)?',
        options: [
            'It is a simpler architecture to implement.',
            'It provides better load balancing and fault tolerance.',
            'It is cheaper to produce.',
            'It can only run user applications on the slave CPUs.'
        ],
        answer: 1,
        hint: 'In an SMP system, all processors are equals.',
        detailedExplanation: 'The main advantage of SMP is its superior load balancing and fault tolerance. Since all processors are capable of running both OS and user tasks, the OS can dynamically distribute the workload across all available CPUs, and if one CPU fails, the others can continue to run the system. This is a significant improvement over AMP, where a failure of the master CPU would cause the entire system to fail.'
    },
    {
        question: 'A user sends a document to a printer. The OS spools the print job, storing it temporarily on the hard drive before sending it to the printer. This is a function of which OS component?',
        options: [
            'File Management',
            'Process Management',
            'Device Management',
            'Memory Management'
        ],
        answer: 2,
        hint: 'Think about which component manages the interaction with peripherals.',
        detailedExplanation: 'Device Management is the OS component that handles all I/O devices. Spooling (Simultaneous Peripheral Operations On-Line) is a technique used by the OS to manage I/O jobs for devices like printers, allowing them to run in the background without tying up a user\'s application. This function falls directly under the responsibility of the device manager.'
    },
    {
        question: 'What is the primary goal of the OS Service "Job Accounting"?',
        options: [
            'To calculate the cost of running a program on the system.',
            'To monitor and record the usage of system resources by different users or jobs.',
            'To keep track of which programs are waiting to be executed.',
            'To optimize the efficiency of the CPU scheduler.'
        ],
        answer: 1,
        hint: 'It\'s about keeping records of resource usage.',
        detailedExplanation: 'Job accounting is an OS service that tracks the resources used by various users or processes. This includes CPU time, memory, disk space, and I/O operations. This information is valuable for system administrators to understand resource consumption, identify potential bottlenecks, and for billing purposes in multi-user environments.'
    },
    {
        question: 'Which of the following is an example of a "context switch"?',
        options: [
            'A program loads a new file from the hard drive into memory.',
            'The CPU stops executing one process and starts executing another.',
            'A user switches between two different desktops in a GUI.',
            'The OS shuts down a background process.'
        ],
        answer: 1,
        hint: 'This term refers to the process of switching the CPU from one process to another.',
        detailedExplanation: 'A context switch is the process of saving the state of a currently running process and loading the state of another process to be executed. This allows the CPU to be shared among multiple processes in a multitasking environment, giving the user the illusion of multiple programs running simultaneously.'
    },
    {
        question: 'What is the key difference between a Single-User OS and a Multiuser OS?',
        options: [
            'A Single-User OS cannot perform multitasking.',
            'A Multiuser OS is a distributed system.',
            'A Single-User OS allows only one user to use the system at a time.',
            'A Multiuser OS is more efficient than a Single-User OS.'
        ],
        answer: 2,
        hint: 'The key is in the name: single vs. multi.',
        detailedExplanation: 'The defining characteristic of a Multiuser OS is its ability to allow multiple users to access and use the computer simultaneously. This is in contrast to a Single-User OS, which is designed for one person to use at a time, such as a traditional home desktop OS.'
    },
    {
        question: 'When a new program is launched, it is loaded into the main memory (RAM). This process is known as:',
        options: [
            'I/O Operations',
            'Program Execution',
            'Device Management',
            'File Management'
        ],
        answer: 1,
        hint: 'This is the first step in running any program.',
        detailedExplanation: 'Program Execution is a fundamental OS service. It involves loading a program from a storage device (like a hard drive) into the main memory, where the CPU can fetch and execute its instructions. The OS also allocates resources and manages the entire lifecycle of the program during its execution.'
    }
];
console.log('Total number of questions:', osQuizQuestions.length);
