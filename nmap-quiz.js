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
        detailedExplanation: 'A RST (Reset) packet is a definitive rejection of a connection attempt. When an Nmap scan sends a SYN packet and receives a RST, ACK response, it means the target machine is online and actively telling Nmap that no service is listening on that specific port. An open port would respond with a SYN, ACK, and a filtered port would either not respond at all or send an ICMP "Destination Unreachable" message. The RST flag definitively indicates the target system received the packet but the specific port/service is not listening.'
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
        detailedExplanation: 'A SYN scan (also called stealth scan) requires Nmap to craft and send raw packets at the network layer, which is a privileged operation. On Linux and macOS, this requires root access (e.g., using `sudo nmap`). If run as a standard user, Nmap will fail to create raw sockets and automatically fall back to a TCP Connect scan (-sT). This is a security feature of the operating system to prevent unprivileged users from crafting potentially malicious packets. Windows also requires administrator privileges for raw socket operations.'
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
        hint: 'IP is for the network, MAC is for the local street.',
        detailedExplanation: 'MAC (Media Access Control) addresses operate at Layer 2 (Data Link Layer) and are only used for local network segment communication. When a router receives a packet destined for 192.168.1.100, it uses ARP (Address Resolution Protocol) to discover the MAC address of that device on the local network segment. The IP address (Layer 3) handles routing between networks, while the MAC address handles final delivery within the local network. MAC addresses are not routable across the internet - they get replaced at each router hop.'
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
        hint: 'Consider how Nmap knows a UDP port is open.',
        detailedExplanation: 'UDP is a connectionless protocol, meaning open UDP ports typically don\'t send responses to probe packets. When Nmap sends a UDP packet to an open port, it usually receives no response, forcing Nmap to wait for a timeout period before concluding the port might be open. Only closed UDP ports reliably send ICMP Port Unreachable messages. This uncertainty and timeout requirement makes UDP scanning much slower and less definitive than TCP scanning, where open ports send clear SYN/ACK responses.'
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
        hint: 'Think about which format is designed for machines to read.',
        detailedExplanation: 'The -oX option outputs results in XML format, which is the most machine-readable and parseable format for automated analysis. Python has excellent XML parsing libraries (like xml.etree.ElementTree) that can easily extract specific data points. While -oN provides normal output (human-readable), -oG provides greppable output (good for command-line tools), and -oA saves all formats, XML (-oX) is specifically designed for programmatic parsing and integration with custom scripts and security tools.'
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
        hint: 'The goal is to be as \'quiet\' as possible.',
        detailedExplanation: 'The -T0 (Paranoid) timing template is the slowest and most stealthy option, designed to evade IDS detection. It sends packets with significant delays between probes (up to 5 minutes), making the scan nearly undetectable but extremely slow. -T5 (Insane) is the fastest but most detectable, -T4 (Aggressive) is fast and easily detected, while -T3 (Normal) is the default balanced approach. For stealth operations, -T0 or -T1 (Sneaky) are preferred to avoid triggering security alerts.'
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
        hint: 'One is non-intrusive, the other is not.',
        detailedExplanation: 'The -sL (List Scan) is completely passive and sends no packets to target hosts. It simply performs DNS resolution on the target range and lists the hostnames/IPs that would be scanned. The -sn (Ping Scan) actively sends discovery packets (ICMP echo requests, TCP SYN to port 443, TCP ACK to port 80, and ICMP timestamp) to determine which hosts are online. This makes -sL completely undetectable and safe for reconnaissance, while -sn can be detected by network monitoring systems.'
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
        hint: 'It belongs to one of three reserved ranges.',
        detailedExplanation: '172.16.1.10 is a private IPv4 address from the 172.16.0.0 to 172.31.255.255 range (172.16.0.0/12). The three private IPv4 address ranges defined by RFC 1918 are: 10.0.0.0/8 (10.0.0.0 to 10.255.255.255), 172.16.0.0/12 (172.16.0.0 to 172.31.255.255), and 192.168.0.0/16 (192.168.0.0 to 192.168.255.255). The other addresses are public: 8.8.8.8 (Google DNS), 208.67.222.222 (OpenDNS), and 101.115.231.35 (public address).'
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
        hint: 'V stands for Version.',
        detailedExplanation: 'The -sV option enables version detection, which attempts to determine the specific application and version running on open ports. After identifying open ports, Nmap sends additional probes to trigger service banners or responses that reveal software names and versions. For example, it might discover "Apache httpd 2.4.41" on port 80 or "OpenSSH 7.4" on port 22. This information is crucial for vulnerability assessment, as different software versions have different security issues. This is different from OS detection (-O) or verbose output (-v).'
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
        hint: 'You need more information about what\'s happening \'under the hood.\'',
        detailedExplanation: 'The -d option enables debugging output, which provides detailed information about what Nmap is doing internally. You can increase the verbosity with -d2, -d3, up to -d9 for maximum debugging information. This shows packet-level details, timing information, and internal decision-making processes. While -T5 would speed up the scan, it wouldn\'t help diagnose why it\'s stalled. --host-timeout would prevent future stalls but wouldn\'t explain the current issue. -sL doesn\'t send packets at all. Debugging output is essential for troubleshooting scan performance issues.'
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
        hint: 'Think about the challenges of a UDP scan or a heavily firewalled host.',
        detailedExplanation: 'The "open|filtered" state occurs when Nmap cannot definitively determine if a port is open or filtered by a firewall. This commonly happens during UDP scans because: 1) Open UDP ports typically don\'t respond to probes, 2) Firewalls may silently drop packets without sending rejection messages. Since both scenarios result in no response, Nmap cannot distinguish between them. This also occurs with heavily firewalled TCP services that drop packets instead of sending RST responses. The ambiguity reflects the inherent challenges in network reconnaissance when defensive measures are in place.'
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
        hint: 'It\'s about the \'fingerprint\' of the packets.',
        detailedExplanation: 'Nmap\'s OS detection analyzes TCP/IP stack fingerprinting by examining how different operating systems implement network protocols. It looks at characteristics like: TTL (Time To Live) values, TCP window sizes, IP identification field behavior, TCP options ordering, response to malformed packets, and ICMP response patterns. Each OS has subtle differences in how it handles these network stack elements, creating a unique "fingerprint." Nmap compares these observed characteristics against its database of known OS fingerprints to make educated guesses about the target\'s operating system.'
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
        hint: 'The key is whether a connection is fully established.',
        detailedExplanation: 'The key difference lies in the completion of the TCP handshake. A SYN scan (`-sS`) sends a SYN packet and immediately tears down the connection with a RST packet after receiving a SYN, ACK. This "half-open" state often goes unnoticed by basic logging systems. In contrast, a TCP Connect Scan (`-sT`) completes the full handshake (SYN, SYN, ACK, ACK), which is a normal operation and is almost always logged by the target\'s operating system or application, making it less stealthy and more easily detected.'
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
        hint: 'Think about a command-line tool for searching text.',
        detailedExplanation: 'The -oG (Greppable) output format is specifically designed for use with command-line tools like `grep`, `awk`, and `cut`. It provides a clean, single-line-per-host output that makes it easy to search for and extract specific information (like IP addresses, open ports, or hostnames) from a large scan report. It is more suitable for text-based searching than the human-readable -oN or machine-readable -oX formats.'
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
        hint: 'The option is a single letter.',
        detailedExplanation: 'The -p option in Nmap is used to specify the ports you want to scan. You can list multiple ports separated by a comma (e.g., `-p 22,80,443`), a range of ports (e.g., `-p 1-1000`), or a combination of both. Other options listed are incorrect syntax.'
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
        hint: 'Think of a building\'s address versus the apartment number.',
        detailedExplanation: 'The IP address is the street address of a building, and the port number is the apartment or suite number within that building. The IP address gets the packet to the correct computer on the network, and the port number ensures the packet is delivered to the correct application or service (e.g., HTTP on port 80, SSH on port 22, etc.) running on that computer. They work together to uniquely identify a service on a host.'
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
        hint: 'It stands for \'aggressive\'.',
        detailedExplanation: 'The -A (Aggressive) option is a shorthand that enables several common and useful Nmap scan features at once. It\'s equivalent to running `nmap -sV -O -sC --traceroute`. This single option combines OS detection (-O), version detection (-sV), and script scanning (-sC), making it a quick way to perform a comprehensive reconnaissance scan.'
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
        hint: 'It\'s a timeout for the entire host.',
        detailedExplanation: 'The `--host-timeout` option sets a maximum amount of time Nmap will spend scanning a single host before moving on. This is extremely useful when scanning large networks with potentially slow or offline hosts. If Nmap can\'t get a response from a host within the specified timeout, it will stop trying and proceed to the next host, preventing the entire scan from stalling.'
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
        hint: 'It\'s a standard port for domain name resolution.',
        detailedExplanation: 'Port 53 is the well-known and standard port for the DNS (Domain Name System) service. DNS is responsible for translating human-readable hostnames (like `www.google.com`) into computer-readable IP addresses. Other common ports are: HTTP (80), SSH (22), and SMTP (25).'
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
        hint: 'It\'s a form of address translation.',
        detailedExplanation: 'Routers use a technology called NAT (Network Address Translation) to allow multiple devices on a private network (each with a private IP address) to share a single public IP address when communicating with the internet. This is a crucial function for IPv4, as it conserves the limited pool of public IP addresses by not requiring a unique public IP for every device.'
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
        hint: 'Think of what the rest of the world sees.',
        detailedExplanation: 'Unlike a private IP address, a public IP address is a unique identifier on the public internet. It is globally routable, meaning that any device on the internet can send a packet to that address. Devices on a home network, for instance, are assigned private IP addresses, while the router\'s interface that connects to the internet has a single public IP.'
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
        hint: 'Espressif is known for producing small, low-power modules.',
        detailedExplanation: 'Espressif Systems is a well-known manufacturer of low-cost, low-power Wi-Fi and Bluetooth-enabled microcontrollers, such as the ESP32 and ESP8266. These modules are widely used in a variety of IoT (Internet of Things) devices, from smart home gadgets to small custom electronics. Therefore, a MAC address with an Espressif vendor code is a strong indicator of an IoT device on the network.'
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
        hint: 'It completes the full handshake before moving on.',
        detailedExplanation: 'In a TCP Connect Scan, Nmap sends a SYN packet, and the target\'s open port responds with a SYN, ACK. Nmap then completes the full TCP three-way handshake by sending a final ACK packet. This establishes a full connection, which is why this type of scan is easily detected. Nmap immediately tears down the connection with a RST packet afterward to prevent a resource leak.'
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
        hint: 'Ping Scan relies on more than just ICMP.',
        detailedExplanation: 'While `nmap -sn` (Ping Scan) does send ICMP echo requests by default, it also uses other methods for host discovery, such as sending TCP SYN packets to common ports (e.g., 443) and TCP ACK packets to port 80. Therefore, if ICMP is blocked, Nmap can still use these other methods to reliably determine which hosts are online. `nmap -PE` specifically uses ICMP, so it would fail.'
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
        hint: 'It\'s the first step in the handshake.',
        detailedExplanation: 'The SYN (Synchronize) flag is the first step in the TCP three-way handshake. A client sends a SYN packet to a server to initiate a connection. The server then responds with a SYN, ACK packet, and the client completes the handshake with a final ACK packet.'
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
        hint: 'The timing templates are a range, while rate is very specific.',
        detailedExplanation: 'Nmap\'s timing templates (`-T0` to `-T5`) are pre-defined groups of settings that affect the scan\'s speed, parallelism, and timeouts. They are a general, broad-stroke approach. In contrast, the `--max-rate` option allows for a much more precise and granular control over the maximum packet rate per second, which cannot be perfectly replicated by any of the predefined templates.'
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
        hint: 'This mode prioritizes speed above all else.',
        detailedExplanation: 'The -T5 (Insane) timing template prioritizes speed above all else. It uses extremely short timeouts and sends a high volume of probes in parallel. This aggressive behavior makes the scan very noisy, easily detectable by intrusion detection systems (IDS), and in some cases, can even cause a denial-of-service condition on a fragile or overloaded network service.'
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
        hint: 'Think about which format is universally used for structured data.',
        detailedExplanation: 'The -oX option produces output in XML format, which is a standardized, structured, and machine-readable format. Most network management and security information and event management (SIEM) systems are designed to ingest and parse XML data, making it the most suitable choice for automated analysis and integration. While -oA includes XML, -oX is the specific option for just the XML output.'
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
        hint: 'Something is silently dropping the packets.',
        detailedExplanation: 'A filtered port means that Nmap is unable to determine if the port is open or closed because its probe packets are being blocked or silently dropped by some form of packet filter, such as a firewall. Unlike a closed port that responds with a RST or an ICMP \'Port Unreachable\' message, a filtered port provides no response at all, creating ambiguity.'
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
        hint: 'It\'s a protocol that maps IP to MAC addresses.',
        detailedExplanation: 'On a local network, Nmap will primarily use ARP (Address Resolution Protocol) for host discovery. ARP is a Layer 2 protocol that maps a known IP address to a physical MAC address. This method is often faster and more reliable on a local network than sending ICMP or TCP probes, as it operates at a lower network layer and doesn\'t require routing.'
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
        hint: 'The file name itself is the giveaway.',
        detailedExplanation: 'The -oA option saves the scan results in all three major formats: Normal (.nmap), Greppable (.gnmap), and XML (.xml). The .nmap file contains the same output you would see on the screen, which is formatted for easy human readability, making it a good choice for reviewing results without a parser.'
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
        hint: 'Network devices can \'lie\' about the characteristics of packets.',
        detailedExplanation: 'While Nmap\'s OS detection is very powerful, it\'s not perfect because network devices like firewalls, proxies, and load balancers can modify packet headers (such as TTL and TCP window size) as they pass through. This can \'trick\' Nmap\'s fingerprinting logic, causing it to misidentify the target\'s operating system. It\'s a key challenge of network security to deal with these altered signatures.'
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
        hint: 'Efficiency over elegance.',
        detailedExplanation: 'After Nmap successfully completes the three-way handshake (SYN, SYN, ACK, ACK) with an open port, it no longer needs the connection. To conserve resources and move on to the next port in the scan list as quickly as possible, Nmap sends a final RST (Reset) packet to immediately terminate the established connection. This is a crucial step to prevent leaving a large number of half-open connections on the target.'
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
        hint: 'Templates are a group of settings, rates are a single, specific setting.',
        detailedExplanation: 'The -T3 (Normal) timing template is a balanced approach that adjusts various scan parameters to perform a quick but reliable scan. It\'s a general-purpose setting. In contrast, `--min-rate 10` is a specific, granular option that tells Nmap to send at least 10 packets per second, regardless of the other timing settings. This gives the user more precise control over the scan speed than the general timing templates.'
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
        hint: 'One of these options performs a low-level host discovery.',
        detailedExplanation: 'A TCP Connect Scan (`-sT`), `-sL`, and a port scan with `-p` do not require elevated privileges because they rely on the operating system\'s standard networking stack to send packets. However, for a Ping Scan (`-sn`) on a local network, Nmap will default to using ARP (Address Resolution Protocol) to discover hosts. Raw ARP packet crafting is a privileged operation that requires root access on most operating systems. If run without root, Nmap will use a different host discovery method.'
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
        hint: 'It\'s a balance of speed and stealth.',
        detailedExplanation: 'By default, Nmap uses the SYN Stealth Scan (`-sS`) for privileged users because it is fast and less likely to be detected or logged by the target compared to a full TCP Connect Scan. It is the most common and recommended scan type for most situations where root privileges are available. If run as a non-privileged user, the default scan would be a TCP Connect Scan.'
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
        hint: 'This option determines what is running on a port.',
        detailedExplanation: 'The -sV (Version detection) option is crucial for identifying services running on non-standard ports. For example, if a web server is running on port 8080 instead of the standard 80, a basic port scan would only show that port 8080 is open. The -sV option would then identify that the service running on that port is, for instance, an Apache HTTP server, helping you understand what\'s actually there. The other options are for host discovery, timing, and listing, not service identification.'
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
        hint: 'Think about the conservation of a limited resource.',
        detailedExplanation: 'The main purpose of NAT (Network Address Translation) is to address the IPv4 address exhaustion problem. By allowing many devices on a private network to share a single public IP, NAT drastically reduces the number of public IP addresses required for the entire internet, helping to extend the lifespan of IPv4. It also adds a layer of security, as internal IP addresses are not exposed directly to the internet.'
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
        hint: 'Think about the definitive nature of an active response.',
        detailedExplanation: 'This question highlights the core difference between a definitive state and an ambiguous one. An `open` port is a definitive state because Nmap received an explicit, expected response (e.g., a SYN/ACK packet) from the target. The `open|filtered` state is ambiguous because Nmap received no response at all, leaving it to guess whether the port is open but non-responsive (as is common with UDP) or being silently blocked by a firewall.'
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
        hint: 'The name suggests a non-intrusive approach.',
        detailedExplanation: 'Nmap has five numeric timing templates (`-T0` to `-T5`) and also provides non-numeric aliases for clarity. The `-T2` template is also known as `polite`. This setting is designed to be very slow to reduce the chance of overwhelming a fragile network service, but it\'s not as slow as the `-T0` (Paranoid) and `-T1` (Sneaky) templates. `-T3` is normal, `-T4` is aggressive, and `-T5` is insane.'
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
        hint: 'The option that is primarily for \'debugging\'.',
        detailedExplanation: 'The -d option is for debugging. The more `d`s you add (or the higher the number you specify, e.g., `d9`), the more detailed the output becomes. `nmap -d9` would provide the highest level of debugging output, showing packet-level traces and every internal decision Nmap makes, making it the best option for troubleshooting or deep analysis. `-vvv` is for verbose output, which is less detailed than debugging.'
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
        hint: 'The RST packet is a definitive sign of a refusal.',
        detailedExplanation: 'A RST (Reset) response is a clear signal that the target is actively refusing the connection request on the specified port. While port 25 is the standard for the SMTP service, the RST response tells Nmap that no service is listening on that port, so it is definitively closed. This is a common response from a firewall that is configured to block a specific port.'
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
        hint: 'F stands for Fast Scan.',
        detailedExplanation: 'The -F (Fast scan) option instructs Nmap to scan only the 100 most common ports instead of its default of 1000. This is a quick way to check for well-known services and is very useful for fast reconnaissance, especially when you are looking for common vulnerabilities.'
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
        hint: 'This protocol resolves addresses.',
        detailedExplanation: 'ARP (Address Resolution Protocol) is the key protocol that maps a logical Layer 3 IP address to a physical Layer 2 MAC address on a local network segment. When a device wants to communicate with another device on the same network, it uses ARP to find the destination MAC address. This is a fundamental process that allows IP-based communication to work over Ethernet networks.'
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
        hint: 'The list scan doesn\'t send any packets.',
        detailedExplanation: 'A List Scan (`-sL`) is a completely passive enumeration method that does not send any packets, whereas a Ping Scan (`-sn`) actively sends network probes to discover hosts. One is entirely non-intrusive, and the other is an active form of reconnaissance. `-sn` does not scan for open ports, it only checks if a host is up.'
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
        hint: 'It means the host is online and responsive.',
        detailedExplanation: 'When Nmap reports that a host is "up," it means it received a definitive response to one of its host discovery probes (e.g., an ICMP echo reply, a TCP SYN/ACK, or a TCP RST). The response confirms that the target system is online and reachable. This does not mean a full handshake was completed or that the OS was identified.'
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
        hint: 'This option sets a timeout for the entire host.',
        detailedExplanation: 'The `--host-timeout` option is specifically designed to prevent a scan from stalling on unresponsive hosts. By setting a timeout (e.g., `30s` for 30 seconds), you ensure that Nmap will give up on a host and move on if it doesn\'t receive a response within that time frame. The other options affect rate and timing but do not set a hard deadline for a single host.'
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
        hint: 'One scan requires a specific user permission.',
        detailedExplanation: 'The TCP Connect Scan (`-sT`) is the fallback option for Nmap when it is run without root or administrator privileges. Since it relies on the operating system\'s standard networking functions to establish a full connection, it doesn\'t require the special permissions needed to craft raw packets, as a SYN scan would. This is the primary reason it\'s used over `-sS` in non-privileged environments.'
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
        hint: 'The target can be specified as a CIDR notation.',
        detailedExplanation: 'A full port scan is not a single option but rather a combination of a port range (`-p-` to scan all 65,535 ports) and a target. To perform this on a different IP range, you simply need to provide the new range using standard notations like a CIDR block (`10.0.0.0/8`), a hyphenated range (`10.0.0.1-255`), or a comma-separated list of IPs. Nmap is flexible and can scan any specified range.'
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
        hint: 'The legality and ethics of the action.',
        detailedExplanation: 'The most important reason to have permission before scanning a network is legal and ethical. In many countries, unauthorized access or attempting to access a computer system is a crime. Even if no damage is done, a scan can be considered a trespass or an attempt to probe for vulnerabilities, which can lead to legal penalties. Always obtain written permission from the network owner before performing a scan.'
    }
];