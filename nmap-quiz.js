// Nmap & Network Security Quiz Questions
const nmapQuestions = [
    {
        question: 'An Nmap scan of a target\'s IP address and a single port returns an immediate RST, ACK response. What can you definitively conclude about the port\'s state?',
        options: [
            'The port is open.',
            'The port is filtered by a firewall.',
            'The port is closed.',
            'The target is not online.'
        ],
        answer: 2,
        hint: 'Think about the TCP flag that terminates a connection or handshake.',
        detailedExplanation: 'A RST (Reset) packet is sent by a server to immediately terminate a TCP connection. When Nmap sends a SYN packet to a port and gets a RST, ACK response, it means the port is actively refusing the connection, which is a clear signal that the port is closed.'
    },
    {
        question: 'You are attempting to perform a SYN scan (`-sS`) on a Linux machine but receive an error. What is the most likely reason for this failure?',
        options: [
            'The target is running a Windows OS.',
            'The SYN scan is only available on Nmap versions older than 7.0.',
            'The user account does not have root or administrator privileges.',
            'The target\'s firewall is blocking all incoming TCP packets.'
        ],
        answer: 2,
        hint: 'Some scan types require special privileges to work correctly.',
        detailedExplanation: 'A SYN scan requires Nmap to craft and send raw packets at the network layer, which is a privileged operation. On Linux and macOS, this requires root access (e.g., using `sudo`). If run as a standard user, Nmap will fail and fall back to a TCP Connect scan.'
    },
    {
        question: 'A packet is addressed to `192.168.1.100` on port 80. Where does the MAC address get used in this communication?',
        options: [
            'To send the packet across the internet to the correct network.',
            'To identify the specific service (e.g., HTTP) on the destination machine.',
            'To deliver the packet from the router to the correct device on the local network.',
            'To confirm the origin of the packet on the public internet.'
        ],
        answer: 2,
        hint: 'IP is for the network, MAC is for the local street.'
    },
    {
        question: 'What is the primary reason that a UDP scan (`-sU`) is generally much slower and less reliable than a TCP scan (`-sS`)?',
        options: [
            'UDP packets are larger and take more time to transmit.',
            'UDP requires a complex handshake for every port, slowing the process.',
            'The lack of a response for an open port necessitates waiting for a timeout period.',
            'UDP traffic is always filtered by default firewalls.'
        ],
        answer: 2,
        hint: 'Consider how Nmap knows a UDP port is open.'
    },
    {
        question: 'You need to scan a target network and want to save the results for later analysis with a custom Python script. Which Nmap output option is the most suitable?',
        options: [
            '-oN',
            '-oG',
            '-oX',
            '-oA'
        ],
        answer: 2,
        hint: 'Think about which format is designed for machines to read.'
    },
    {
        question: 'If you are scanning a large network and want to avoid being detected by an intrusion detection system (IDS), which timing template (`-T`) would be the most appropriate choice?',
        options: [
            '-T5',
            '-T4',
            '-T3',
            '-T0'
        ],
        answer: 3,
        hint: 'The goal is to be as \'quiet\' as possible.'
    },
    {
        question: 'What is the key difference between the `-sL` (List Scan) and `-sn` (Ping Scan) options?',
        options: [
            '-sL lists open ports, while -sn lists services.',
            '-sL sends no packets to the targets, while -sn sends discovery packets.',
            '-sL lists all public IP addresses, while -sn lists only private ones.',
            '-sL lists only online hosts, while -sn lists all hosts in a range.'
        ],
        answer: 1,
        hint: 'One is non-intrusive, the other is not.'
    },
    {
        question: 'Which of the following is an example of a private IPv4 address?',
        options: [
            '8.8.8.8',
            '172.16.1.10',
            '208.67.222.222',
            '101.115.231.35'
        ],
        answer: 1,
        hint: 'It belongs to one of three reserved ranges.'
    },
    {
        question: 'What is the purpose of the `nmap -sV` option?',
        options: [
            'To enable verbose output for the scan.',
            'To perform a stealth scan for version numbers.',
            'To detect the operating system of the target.',
            'To determine the application and its version running on an open port.'
        ],
        answer: 3,
        hint: 'V stands for Version.'
    },
    {
        question: 'You are troubleshooting a scan that appears to be stalled. You\'ve waited 10 minutes and see no new output. Which option would be most useful to help diagnose the issue and get real-time feedback?',
        options: [
            '-T5',
            '-d',
            '--host-timeout',
            '-sL'
        ],
        answer: 1,
        hint: 'You need more information about what\'s happening \'under the hood.\''
    },
    {
        question: 'An Nmap scan reports a port as `open|filtered`. What is the most likely reason for this ambiguous result?',
        options: [
            'Nmap received an ICMP Port Unreachable message.',
            'The target sent a RST, ACK packet in response.',
            'The target is offline and not responding.',
            'Nmap received no response and couldn\'t distinguish between a firewall and an open UDP port.'
        ],
        answer: 3,
        hint: 'Think about the challenges of a UDP scan or a heavily firewalled host.'
    },
    {
        question: 'What does Nmap\'s OS detection (`-O`) rely on to make an educated guess about the target\'s operating system?',
        options: [
            'The hostname provided by the target.',
            'The MAC address vendor and its known operating systems.',
            'Analysis of various TCP/IP stack characteristics, such as TTL and TCP window size.',
            'A pre-installed database of public servers and their known OS.'
        ],
        answer: 2,
        hint: 'It\'s about the \'fingerprint\' of the packets.'
    },
    {
        question: 'Why is the TCP Connect Scan (`-sT`) considered less stealthy than the SYN Scan (`-sS`)?',
        options: [
            'It takes longer to complete and is easier to detect.',
            'It completes the full TCP three-way handshake, creating a log entry on the target.',
            'It uses a different set of ports that are more heavily monitored.',
            'It requires root privileges, which leaves an audit trail.'
        ],
        answer: 1,
        hint: 'The key is whether a connection is fully established.'
    },
    {
        question: 'You need to scan a large network range `10.10.0.0/16` and want to save the results in a format that\'s easy to read and search for a specific IP address later on. Which output format is most suitable?',
        options: [
            '-oX',
            '-oN',
            '-oG',
            '-oA'
        ],
        answer: 2,
        hint: 'Think about a command-line tool for searching text.'
    },
    {
        question: 'Which Nmap option would you use to scan only ports 22 and 80 on a target?',
        options: [
            '`--port 22,80`',
            '`-p 22,80`',
            '`--scan-ports 22,80`',
            '`--ports-to-scan 22,80`'
        ],
        answer: 1,
        hint: 'The option is a single letter.'
    },
    {
        question: 'Which of the following describes the relationship between an IP address and a port number?',
        options: [
            'The port number is a subdivision of the IP address.',
            'The IP address identifies the device, and the port identifies the specific service on that device.',
            'The IP address is a physical address, and the port number is a logical address.',
            'The port number identifies the device, and the IP address identifies the service.'
        ],
        answer: 1,
        hint: 'Think of a building\'s address versus the apartment number.'
    },
    {
        question: 'A network administrator wants to perform a comprehensive scan on their internal network. Which single Nmap option combines OS detection, version detection, and script scanning?',
        options: [
            '-sV',
            '-O',
            '-A',
            '-T5'
        ],
        answer: 2,
        hint: 'It stands for \'aggressive\'.'
    },
    {
        question: 'When scanning a host with a slow internet connection, you want to set a maximum time Nmap will wait for a response from that single host before moving on. Which option would you use?',
        options: [
            '`--max-rate`',
            '`-T5`',
            '`--host-timeout`',
            '`--min-parallelism`'
        ],
        answer: 2,
        hint: 'It\'s a timeout for the entire host.'
    },
    {
        question: 'A packet is sent to a target\'s IP address and port 53. What is the most likely service the sender is trying to communicate with?',
        options: [
            'HTTP',
            'SSH',
            'SMTP',
            'DNS'
        ],
        answer: 3,
        hint: 'It\'s a standard port for domain name resolution.'
    },
    {
        question: 'What is the primary function of a router in the context of public and private IP addresses?',
        options: [
            'To assign public IP addresses to every device on a network.',
            'To translate public IP addresses to private IP addresses using NAT.',
            'To block all private IP addresses from connecting to the internet.',
            'To assign a single public IP address to every device on a network.'
        ],
        answer: 1,
        hint: 'It\'s a form of address translation.'
    },
    {
        question: 'Which of the following is true about a public IP address?',
        options: [
            'It is used for communication within a local network.',
            'It is assigned permanently by the device manufacturer.',
            'It is globally unique and routable on the internet.',
            'It is the same for every device in a home network.'
        ],
        answer: 2,
        hint: 'Think of what the rest of the world sees.'
    },
    {
        question: 'If you see a MAC address vendor listed as \'Espressif\' in your Nmap scan, what type of device is it most likely to be?',
        options: [
            'A standard Windows laptop',
            'An enterprise server in a data center',
            'An IoT (Internet of Things) device',
            'A core network router'
        ],
        answer: 2,
        hint: 'Espressif is known for producing small, low-power modules.'
    },
    {
        question: 'In a TCP Connect Scan (`-sT`), what happens when Nmap finds an open port?',
        options: [
            'It receives a RST, ACK packet from the target.',
            'It sends an ACK packet to the target, completing the handshake.',
            'It receives an ICMP Destination Unreachable message.',
            'It receives no response at all from the target.'
        ],
        answer: 1,
        hint: 'It completes the full handshake before moving on.'
    },
    {
        question: 'You are told a firewall is actively blocking all ICMP packets. Which Nmap host discovery option would still be reliable for finding live hosts?',
        options: [
            '`nmap -sn`',
            '`nmap -sL`',
            '`nmap -sP`',
            '`nmap -PE`'
        ],
        answer: 1,
        hint: 'Ping Scan relies on more than just ICMP.'
    },
    {
        question: 'What does a `TCP` flag of `SYN` signify?',
        options: [
            'A request to start a connection.',
            'A request to close a connection.',
            'An acknowledgement of a received packet.',
            'An error or reset of a connection.'
        ],
        answer: 0,
        hint: 'It\'s the first step in the handshake.'
    },
    {
        question: 'What is the Nmap equivalent of running `nmap --max-rate 100`?',
        options: [
            '`nmap -T1`',
            '`nmap -T2`',
            '`nmap -T3`',
            'There is no equivalent timing template.'
        ],
        answer: 3,
        hint: 'The timing templates are a range, while rate is very specific.'
    },
    {
        question: 'What is a major disadvantage of using the `nmap -T5` (Insane) timing template?',
        options: [
            'It is too slow to be practical.',
            'It can be easily detected and may overwhelm a target network.',
            'It requires specific port numbers to be defined.',
            'It can only be used on a Windows machine.'
        ],
        answer: 1,
        hint: 'This mode prioritizes speed above all else.'
    },
    {
        question: 'Which Nmap option would you use to save a report that you can import into a network management system for automated analysis?',
        options: [
            '`-oN`',
            '`-oG`',
            '`-oX`',
            '`-oA`'
        ],
        answer: 2,
        hint: 'Think about which format is universally used for structured data.'
    },
    {
        question: 'You scan a target with `nmap -sS` and see a port listed as \'filtered\'. What does this mean?',
        options: [
            'The port is open, but the service is not responding.',
            'The port is closed, but Nmap can\'t confirm it.',
            'A firewall is preventing Nmap\'s probes from reaching the port.',
            'The port is closed, but a host is up.'
        ],
        answer: 2,
        hint: 'Something is silently dropping the packets.'
    },
    {
        question: 'If you are scanning a device on the same local network, which protocol does Nmap primarily use for host discovery?',
        options: [
            'ICMP',
            'ARP',
            'TCP',
            'UDP'
        ],
        answer: 1,
        hint: 'It\'s a protocol that maps IP to MAC addresses.'
    },
    {
        question: 'You run a scan with the `-oA` option and a base name of `report`. Which file extension is a human-readable output?',
        options: [
            '.gnmap',
            '.xml',
            '.txt',
            '.nmap'
        ],
        answer: 3,
        hint: 'The file name itself is the giveaway.'
    },
    {
        question: 'What is the primary reason why Nmap can\'t get a perfect OS detection result every time?',
        options: [
            'The OS detection database is not regularly updated.',
            'Network firewalls can alter packet characteristics.',
            'Nmap\'s OS detection is a deprecated feature.',
            'Some operating systems intentionally do not respond to Nmap probes.'
        ],
        answer: 1,
        hint: 'Network devices can \'lie\' about the characteristics of packets.'
    },
    {
        question: 'In the TCP Connect Scan, Nmap sends a `RST, ACK` packet after the three-way handshake is completed. Why does it do this?',
        options: [
            'To signal to the target that the port is open.',
            'To gracefully close the connection.',
            'To quickly terminate the connection and move on to the next port.',
            'To confirm the target is not a virtual machine.'
        ],
        answer: 2,
        hint: 'Efficiency over elegance.'
    },
    {
        question: 'What is the difference between an Nmap scan run with `-T3` and one run with `--min-rate 10`?',
        options: [
            '`-T3` is faster, while `--min-rate 10` is slower.',
            '`-T3` is a general template, while `--min-rate 10` enforces a specific packet rate.',
            '`-T3` scans only public IPs, while `--min-rate 10` scans all IPs.',
            '`-T3` is for TCP, while `--min-rate 10` is for UDP.'
        ],
        answer: 1,
        hint: 'Templates are a group of settings, rates are a single, specific setting.'
    },
    {
        question: 'Which of the following would require root privileges to run successfully?',
        options: [
            'A TCP Connect scan (`-sT`)',
            'An Nmap Ping scan (`-sn`) on the local network',
            'A List scan (`-sL`)',
            'A port scan with `-p`'
        ],
        answer: 1,
        hint: 'One of these options performs a low-level host discovery.'
    },
    {
        question: 'You run `nmap -v 192.168.1.1` and see a line saying, \'Completed SYN Stealth Scan...\'. What is the default scan type Nmap uses for port scanning?',
        options: [
            'TCP Connect Scan',
            'UDP Scan',
            'SYN Stealth Scan',
            'List Scan'
        ],
        answer: 2,
        hint: 'It\'s a balance of speed and stealth.'
    },
    {
        question: 'If you are scanning a home network `192.168.1.0/24` and want to find a service running on a non-standard port, which option is essential?',
        options: [
            '`-sn`',
            '`-T0`',
            '`-sV`',
            '`-sL`'
        ],
        answer: 2,
        hint: 'This option determines what is running on a port.'
    },
    {
        question: 'What is the main reason why a router uses a single public IP address for all the devices on a home network?',
        options: [
            'To increase the security of the internal network.',
            'To use up all available IPv4 addresses.',
            'To allow every device to connect directly to the internet.',
            'To simplify communication with other routers.'
        ],
        answer: 0,
        hint: 'Think about the conservation of a limited resource.'
    },
    {
        question: 'You see a result for a port as `open` and another as `open|filtered`. What is the fundamental difference in how Nmap determined these two states?',
        options: [
            'The first received a response; the second did not.',
            'The first was a TCP port; the second was a UDP port.',
            'The first was open; the second was closed.',
            'The first was a standard port; the second was a custom port.'
        ],
        answer: 0,
        hint: 'Think about the definitive nature of an active response.'
    },
    {
        question: 'What is the non-numeric equivalent of `-T2`?',
        options: [
            '`normal`',
            '`polite`',
            '`aggressive`',
            '`insane`'
        ],
        answer: 1,
        hint: 'The name suggests a non-intrusive approach.'
    },
    {
        question: 'Which of the following Nmap options would you use to get the most detailed information about what Nmap is doing during a scan?',
        options: [
            '`-vvv`',
            '`-T5`',
            '`-d9`',
            '`--min-rate 1`'
        ],
        answer: 2,
        hint: 'The option that is primarily for \'debugging\'.'
    },
    {
        question: 'A packet is sent to a target on port 25. The target sends a `RST` response. What does this indicate?',
        options: [
            'The SMTP service is open.',
            'The port is filtered.',
            'The port is closed.',
            'The port is a UDP port.'
        ],
        answer: 2,
        hint: 'The RST packet is a definitive sign of a refusal.'
    },
    {
        question: 'What is the main purpose of the `nmap -F` option?',
        options: [
            'To perform a full port scan (all 65,535 ports).',
            'To perform a scan for the 100 most common ports.',
            'To scan a network range in a very short time.',
            'To force a SYN scan.'
        ],
        answer: 1,
        hint: 'F stands for Fast Scan.'
    },
    {
        question: 'A MAC address is a permanent hardware address, while an IP address is a logical address that can change. What allows a router to map a dynamic IP address to a static MAC address?',
        options: [
            'NAT',
            'TCP',
            'ARP',
            'DNS'
        ],
        answer: 2,
        hint: 'This protocol resolves addresses.'
    },
    {
        question: 'What is the primary difference between `nmap -sL` and `nmap -sn` in terms of network interaction?',
        options: [
            '`-sL` performs an ARP scan, while `-sn` performs a TCP scan.',
            '`-sL` is non-intrusive, while `-sn` sends probes and is intrusive.',
            '`-sL` is for local networks, while `-sn` is for remote networks.',
            '`-sL` finds open ports, while `-sn` finds active hosts.'
        ],
        answer: 1,
        hint: 'The list scan doesn\'t send any packets.'
    },
    {
        question: 'If an Nmap scan reports a host is \'up\', what has happened?',
        options: [
            'The host has responded to a probe from Nmap.',
            'The host has successfully completed a TCP handshake with Nmap.',
            'The host\'s IP address is in Nmap\'s local database.',
            'The host\'s operating system has been identified.'
        ],
        answer: 0,
        hint: 'It means the host is online and responsive.'
    },
    {
        question: 'Which Nmap option would you use if a host is taking too long to respond and you want to ensure the scan doesn\'t stall for more than 30 seconds on that single host?',
        options: [
            '`--min-rate 30`',
            '`--host-timeout 30s`',
            '`-T0`',
            '`--max-parallelism 1`'
        ],
        answer: 1,
        hint: 'This option sets a timeout for the entire host.'
    },
    {
        question: 'When is it appropriate to use a TCP Connect Scan (`-sT`) instead of a SYN Scan (`-sS`)?',
        options: [
            'When you want to be more stealthy.',
            'When you have root privileges.',
            'When you are scanning UDP ports.',
            'When you do not have root privileges.'
        ],
        answer: 3,
        hint: 'One scan requires a specific user permission.'
    },
    {
        question: 'What is the Nmap option for performing a full port scan, but on a different IP range?',
        options: [
            'This is not possible, a full scan is always on the same IP.',
            'There\'s no single option, you need to set the range manually.',
            'You need to specify a range like `10.0.0.0/8`.',
            'Nmap automatically determines the range based on the network.'
        ],
        answer: 2,
        hint: 'The target can be specified as a CIDR notation.'
    },
    {
        question: 'Why is it important to have permission before scanning a network or host?',
        options: [
            'It is required by Nmap\'s license.',
            'It can prevent the scan from being blocked by a firewall.',
            'Scanning without permission is illegal in many jurisdictions.',
            'It allows Nmap to run faster and more accurately.'
        ],
        answer: 2,
        hint: 'The legality and ethics of the action.'
    }
];