// Network Fundamentals Quiz Questions
const networkFundamentalsQuestions = [
    {
      question: "A technician needs to replace a faulty transceiver on a fiber-optic cable. The cable is a multimode fiber and the distance is 500 meters. Which of the following transceivers should the technician use?",
      options: ["1000BASE-T", "100BASE-FX", "10GBASE-SR", "1000BASE-SX"],
      answer: 3,
      hint: "Think about the type of fiber and the distance requirement for Gigabit Ethernet.",
      detailedExplanation: "1000BASE-SX is the correct choice. It is a Gigabit Ethernet standard that uses multimode fiber and can support distances up to 550 meters. 100BASE-FX is for Fast Ethernet, 10GBASE-SR is for 10 Gigabit Ethernet (and has different distance limitations), and 1000BASE-T is for copper cabling."
    },
    {
      question: "Which of the following is an example of an IPv6 address?",
      options: ["192.168.1.1", "FE80::C89D:D5B:9:4941", "255.255.255.0", "10.0.0.1"],
      answer: 1,
      hint: "IPv6 addresses are typically much longer and use hexadecimal notation.",
      detailedExplanation: "FE80::C89D:D5B:9:4941 is an IPv6 address. IPv6 uses a 128-bit address format expressed in hexadecimal, often with colons separating the groups of four hexadecimal digits. IPv4 addresses, like the others listed, are 32-bit and use a dotted-decimal format."
    },
    {
      question: "Which type of cabling is most susceptible to EMI and RFI?",
      options: ["Coaxial", "Shielded Twisted Pair (STP)", "Unshielded Twisted Pair (UTP)", "Fiber Optic"],
      answer: 2,
      hint: "The name of the cable gives you a big clue about its lack of protection.",
      detailedExplanation: "Unshielded Twisted Pair (UTP) is the most common and least expensive type of network cabling, but it lacks the metallic shield found in STP cables, making it highly susceptible to Electromagnetic Interference (EMI) and Radio-Frequency Interference (RFI)."
    },
    {
      question: "Which of the following is a private IP address range?",
      options: ["11.0.0.0/8", "172.32.0.0/16", "192.168.1.0/24", "224.0.0.1/24"],
      answer: 2,
      hint: "Remember the three main private address blocks defined in RFC 1918.",
      detailedExplanation: "The RFC 1918 private address ranges are 10.0.0.0 - 10.255.255.255 (10.0.0.0/8), 172.16.0.0 - 172.31.255.255 (172.16.0.0/12), and 192.168.0.0 - 192.168.255.255 (192.168.0.0/16). 192.168.1.0/24 falls within the third range."
    },
    {
      question: "What is the primary function of a network router?",
      options: ["To connect devices within a single LAN", "To forward data packets between different networks", "To filter network traffic based on MAC addresses", "To amplify network signals"],
      answer: 1,
      hint: "Think about what a 'route' is, and what a router 'routes'.",
      detailedExplanation: "A router's primary function is to forward data packets between different computer networks. It uses IP addresses to determine the best path for a packet to travel, making it a Layer 3 device."
    },
    {
      question: "Which of the following protocols is used to securely transfer files over a network?",
      options: ["FTP", "Telnet", "SFTP", "HTTP"],
      answer: 2,
      hint: "Look for the 'S' in the protocol acronym, which usually stands for 'secure'.",
      detailedExplanation: "SFTP (Secure File Transfer Protocol) is a secure version of FTP that uses SSH (Secure Shell) to encrypt both the commands and the data being transferred, providing a high level of security. FTP and Telnet are insecure."
    },
    {
      question: "A user is experiencing intermittent connectivity issues. The technician suspects a faulty network cable. Which tool would be the best to confirm this?",
      options: ["Protocol Analyzer", "Multimeter", "Cable Tester", "Toner Probe"],
      answer: 2,
      hint: "The name of the tool directly tells you its purpose.",
      detailedExplanation: "A cable tester is specifically designed to test the integrity of network cables. It can detect opens, shorts, miswires, and other cable faults that could cause intermittent connectivity issues."
    },
    {
      question: "Which protocol is used to assign IP addresses automatically to devices on a network?",
      options: ["DNS", "DHCP", "ARP", "ICMP"],
      answer: 1,
      hint: "Think about 'dynamic' assignment of network configurations.",
      detailedExplanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and other network configuration parameters to devices on a network."
    },
    {
      question: "What is the maximum transmission distance for 1000BASE-T Ethernet over Cat 6 cable?",
      options: ["100 meters", "185 meters", "500 meters", "2 kilometers"],
      answer: 0,
      hint: "This is a standard distance limit for copper Ethernet cables.",
      detailedExplanation: "1000BASE-T (Gigabit Ethernet over twisted pair) has a maximum transmission distance of 100 meters over Cat 5e, Cat 6, or higher category cables."
    },
    {
      question: "Which layer of the OSI model is responsible for error detection and correction?",
      options: ["Physical", "Data Link", "Network", "Transport"],
      answer: 3,
      hint: "This layer ensures reliable data delivery between hosts.",
      detailedExplanation: "The Transport layer (Layer 4) is responsible for error detection and correction, flow control, and reliable data delivery. Protocols like TCP operate at this layer."
    },
    {
      question: "What is the default subnet mask for a Class A IP address?",
      options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
      answer: 0,
      hint: "Class A addresses have only the first octet reserved for the network portion.",
      detailedExplanation: "A Class A network has a default subnet mask of 255.0.0.0. This means the first 8 bits are reserved for the network address, and the remaining 24 bits are for host addresses. This allows for a very large number of hosts on a single network."
    },
    {
      question: "Which of the following is a command-line utility used to test the reachability of a host on an IP network?",
      options: ["tracert", "netstat", "ping", "arp"],
      answer: 2,
      hint: "The command is named after a sound a submarine makes.",
      detailedExplanation: "The `ping` command sends ICMP echo request packets to a specified host and waits for an echo reply. It is a fundamental tool for checking network connectivity and measuring round-trip time."
    },
    {
      question: "Which of the following is used to store the MAC addresses and corresponding switch ports of connected devices?",
      options: ["Routing table", "ARP cache", "MAC address table", "DNS cache"],
      answer: 2,
      hint: "The name of the table describes exactly what it stores.",
      detailedExplanation: "A MAC address table (also known as a CAM table) is used by a network switch to map a device's MAC address to the physical port it is connected to. This allows the switch to forward traffic directly to the correct port instead of broadcasting it."
    },
    {
      question: "What is the primary difference between TCP and UDP?",
      options: ["TCP is faster, while UDP is more reliable", "TCP is connection-oriented, while UDP is connectionless", "TCP is used for web traffic, while UDP is for email", "TCP operates at Layer 3, while UDP operates at Layer 4"],
      answer: 1,
      hint: "Think about which one requires a handshake to establish a connection.",
      detailedExplanation: "TCP (Transmission Control Protocol) is a connection-oriented protocol, meaning it establishes a connection (a three-way handshake) before transmitting data and ensures delivery. UDP (User Datagram Protocol) is a connectionless protocol, which sends data without an established connection and does not guarantee delivery, making it faster but less reliable."
    },
    {
      question: "Which of the following provides the most physical security for a network cable?",
      options: ["Cable ties", "Cable ducts", "Conduit", "Cable trays"],
      answer: 2,
      hint: "Think of a heavy-duty pipe for protecting cables.",
      detailedExplanation: "Conduit is a durable tube or pipe used to protect and route electrical wiring and network cables. It provides the highest level of physical protection against damage from impacts, moisture, and fire."
    },
    {
      question: "Which type of server would be used to control the flow of traffic and cache frequently accessed web pages?",
      options: ["DNS server", "DHCP server", "Proxy server", "Web server"],
      answer: 2,
      hint: "This type of server acts as an intermediary for requests from clients seeking resources from other servers.",
      detailedExplanation: "A proxy server acts as a gateway between a local network and a larger network like the internet. It can filter and control web access, and it can also cache web pages to improve performance by reducing bandwidth usage and latency."
    },
    {
      question: "What is the purpose of a MAC address?",
      options: ["To identify a device on a network at Layer 3", "To provide a logical address for routing", "To uniquely identify a network adapter at Layer 2", "To resolve domain names to IP addresses"],
      answer: 2,
      hint: "It's the 'physical' address of the network card.",
      detailedExplanation: "A MAC (Media Access Control) address is a unique identifier assigned to a network interface controller (NIC) for communications on a physical network segment. It is a Layer 2 address, unlike an IP address which is a Layer 3 address."
    },
    {
      question: "Which of the following describes the function of a demilitarized zone (DMZ)?",
      options: ["A zone for hosts with limited access", "A buffer zone between the internal network and the internet", "A secure zone for mission-critical servers", "A zone for wireless guest access"],
      answer: 1,
      hint: "DMZ is a military term for a 'no man's land'.",
      detailedExplanation: "A DMZ is a physical or logical subnetwork that contains and exposes an organization's external-facing services to a larger, untrusted network, usually the internet. Its purpose is to add an extra layer of security to the local area network (LAN)."
    },
    {
      question: "Which of the following is a network protocol that is used to monitor and manage network devices?",
      options: ["SNMP", "RDP", "SSH", "SMB"],
      answer: 0,
      hint: "The name of the protocol contains 'management'.",
      detailedExplanation: "SNMP (Simple Network Management Protocol) is an application layer protocol that provides a standardized framework for monitoring and managing devices on a network, such as routers, switches, and servers."
    },
    {
      question: "What is the purpose of a default gateway?",
      options: ["To provide IP addresses to hosts", "To connect to devices on the same subnet", "To route traffic from the local subnet to other networks", "To resolve hostnames"],
      answer: 2,
      hint: "It's the 'doorway' out of your local network.",
      detailedExplanation: "A default gateway is a node on a computer network that serves as an access point to another network. It's the router that a host sends all traffic to if the destination is not on the same local subnet."
    },
    {
      question: "Which of the following is the most secure wireless encryption standard?",
      options: ["WEP", "WPA", "WPA2", "WPA3"],
      answer: 3,
      hint: "Look for the newest standard, as security protocols are constantly being updated.",
      detailedExplanation: "WPA3 (Wi-Fi Protected Access 3) is the newest and most secure standard for wireless network encryption. It provides enhanced security features over its predecessors, WPA2, WPA, and the highly insecure WEP."
    },
    {
      question: "What is the purpose of an IDS?",
      options: ["To block malicious traffic", "To detect malicious activity on a network", "To encrypt network traffic", "To filter spam emails"],
      answer: 1,
      hint: "IDS stands for 'Intrusion Detection System'.",
      detailedExplanation: "An IDS (Intrusion Detection System) is a device or software application that monitors a network or systems for malicious activity or policy violations. It only detects and alerts, it doesn't block the traffic like an Intrusion Prevention System (IPS) does."
    },
    {
      question: "Which of the following is an example of a link-state routing protocol?",
      options: ["RIP", "RIPv2", "BGP", "OSPF"],
      answer: 3,
      hint: "This protocol is often used in large, complex networks because it calculates the shortest path based on the 'state' of the network links.",
      detailedExplanation: "OSPF (Open Shortest Path First) is a link-state routing protocol. It is used to find the best path for data packets by calculating the shortest path to all networks in its routing domain using the Dijkstra algorithm."
    },
    {
      question: "What is the purpose of a patch panel?",
      options: ["To connect switches to each other", "To connect client devices to a switch", "To terminate network cables and provide a central point for cross-connections", "To house network routers"],
      answer: 2,
      hint: "It's a panel used for 'patching' cables.",
      detailedExplanation: "A patch panel is a mounted hardware assembly containing a number of jacks, typically RJ45, where network cables are terminated. This provides an organized, central point for making cross-connections between devices and the wall jacks in a building."
    },
    {
      question: "Which protocol is used to provide encrypted remote access to a server's command-line interface?",
      options: ["Telnet", "RDP", "VNC", "SSH"],
      answer: 3,
      hint: "The protocol is the secure version of Telnet.",
      detailedExplanation: "SSH (Secure Shell) is the industry standard for secure remote command-line access. Unlike Telnet, which sends data in plain text, SSH encrypts all communications, making it secure for transmitting credentials and sensitive data."
    },
    {
      question: "Which of the following IP addresses is a public IP address?",
      options: ["10.10.10.1", "172.17.20.1", "192.168.1.1", "203.0.113.1"],
      answer: 3,
      hint: "Public IPs are routable on the internet, and are not in the private address ranges.",
      detailedExplanation: "The address 203.0.113.1 falls outside the private IP address ranges (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16). Therefore, it is a public IP address that is routable on the internet. The other options are all private IPs."
    },
    {
      question: "What is the purpose of a subnet mask?",
      options: ["To assign a default gateway", "To identify the host portion of an IP address", "To identify the network portion of an IP address", "To connect different networks"],
      answer: 2,
      hint: "It 'masks' the network portion of the address, separating it from the host portion.",
      detailedExplanation: "A subnet mask is a 32-bit number that masks an IP address and divides the IP address into a network address and a host address. The bits in the subnet mask that are '1' represent the network portion of the IP address."
    },
    {
      question: "Which of the following is a key feature of a managed switch?",
      options: ["It forwards all traffic to all ports", "It requires no configuration", "It supports VLANs and advanced security features", "It cannot connect to a router"],
      answer: 2,
      hint: "Managed switches are more 'intelligent' and configurable than unmanaged ones.",
      detailedExplanation: "A managed switch provides a command-line interface (CLI) or a web-based interface for configuration. This allows an administrator to configure features like VLANs, QoS (Quality of Service), and advanced security, which are not available on a simple, unmanaged switch."
    },
    {
      question: "What is the purpose of a DHCP reservation?",
      options: ["To provide a dynamic IP address", "To assign a specific IP address to a specific MAC address", "To block a device from the network", "To reserve a pool of addresses for public use"],
      answer: 1,
      hint: "It 'reserves' a fixed IP for a specific device.",
      detailedExplanation: "A DHCP reservation ensures that a specific device on the network will always receive the same IP address from the DHCP server. This is done by mapping the device's MAC address to a fixed IP address, which is useful for servers or printers that need a static address."
    },
    {
      question: "Which type of fiber optic cable is best for long-distance communication?",
      options: ["Multimode", "Singlemode", "Coaxial", "Shielded Twisted Pair"],
      answer: 1,
      hint: "The name implies it has a single path for light.",
      detailedExplanation: "Singlemode fiber optic cable has a much smaller core than multimode fiber, allowing a single path for light to travel. This reduces signal attenuation and allows the light to travel much farther, making it ideal for long-distance communication."
    },
    {
      question: "Which of the following is an advantage of IPv6 over IPv4?",
      options: ["It is more secure by default", "It has a smaller address space", "It is easier to remember", "It eliminates the need for routers"],
      answer: 0,
      hint: "IPv6 was designed with security in mind from the start.",
      detailedExplanation: "IPv6 includes IPsec (Internet Protocol Security) as a mandatory part of the protocol, providing end-to-end encryption and authentication by default. IPv4 requires the optional addition of IPsec to achieve the same level of security."
    },
    {
      question: "What is the purpose of a protocol analyzer?",
      options: ["To test the physical integrity of a cable", "To monitor and analyze network traffic", "To assign IP addresses", "To block malicious traffic"],
      answer: 1,
      hint: "The name describes its function: it 'analyzes' 'protocols'.",
      detailedExplanation: "A protocol analyzer, also known as a packet sniffer, is a tool that captures and decodes network traffic, allowing a technician to monitor network activity, troubleshoot problems, and analyze the contents of data packets."
    },
    {
      question: "What is the main function of a router's routing table?",
      options: ["To map IP addresses to MAC addresses", "To store a list of all connected devices", "To determine the best path for forwarding data packets", "To manage VLANs"],
      answer: 2,
      hint: "It helps the router decide where to 'route' traffic.",
      detailedExplanation: "A routing table is a data table stored in a router or a networked computer that lists the routes to particular network destinations. The router uses this table to decide where to forward incoming data packets to reach their destination."
    },
    {
      question: "Which of the following is a common command-line tool for displaying and modifying the IP-to-MAC address resolution cache?",
      options: ["ipconfig", "tracert", "ping", "arp"],
      answer: 3,
      hint: "The command is named after the protocol it manages.",
      detailedExplanation: "The `arp` (Address Resolution Protocol) command is used to display and modify the ARP cache, which stores the dynamic IP-to-MAC address mappings. This is a crucial tool for troubleshooting Layer 2 connectivity issues."
    },
    {
      question: "Which of the following is a network-based attack that tricks a user into entering sensitive information on a fake website?",
      options: ["DoS", "Phishing", "Man-in-the-middle", "Brute-force"],
      answer: 1,
      hint: "The name sounds like someone is 'fishing' for your information.",
      detailedExplanation: "Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message."
    },
    {
      question: "Which protocol is used by web browsers to retrieve web pages?",
      options: ["FTP", "DHCP", "HTTP", "SNMP"],
      answer: 2,
      hint: "The protocol is named after the 'text' that makes up a web page.",
      detailedExplanation: "HTTP (Hypertext Transfer Protocol) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers."
    },
    {
      question: "Which of the following is an example of a Layer 4 protocol?",
      options: ["IP", "TCP", "Ethernet", "ICMP"],
      answer: 1,
      hint: "Layer 4 is the Transport layer, which handles end-to-end communication.",
      detailedExplanation: "TCP (Transmission Control Protocol) is a Layer 4 protocol. It's responsible for segmenting data and ensuring that data is delivered reliably, in order, and without errors. IP is Layer 3, Ethernet is Layer 2, and ICMP is Layer 3."
    },
    {
      question: "A technician needs to find the path a packet takes from their computer to a remote server. Which command should they use?",
      options: ["ping", "tracert", "netstat", "ipconfig"],
      answer: 1,
      hint: "The command traces the 'route'.",
      detailedExplanation: "The `tracert` (traceroute) command is a network diagnostic tool for displaying the route and measuring transit delays of packets across an Internet Protocol network. It's invaluable for troubleshooting latency and path-related issues."
    },
    {
      question: "What is the purpose of a VLAN trunk?",
      options: ["To connect two hosts on the same VLAN", "To carry traffic for multiple VLANs over a single physical link", "To block all traffic between VLANs", "To connect a switch to a host"],
      answer: 1,
      hint: "A 'trunk' is like a main pipeline that carries multiple things at once.",
      detailedExplanation: "A VLAN trunk is a single physical network link that carries traffic for multiple VLANs. This is achieved by tagging each frame with a VLAN ID (e.g., using 802.1Q) so that the receiving switch can identify which VLAN the traffic belongs to."
    },
    {
      question: "Which of the following is a key benefit of using a patch panel?",
      options: ["It encrypts network traffic", "It simplifies cable management and troubleshooting", "It increases network speed", "It provides a wireless access point"],
      answer: 1,
      hint: "Think about the organization and neatness of the cables.",
      detailedExplanation: "A patch panel provides a central, organized point for all the network cables in a building. This makes it much easier to manage, re-route, and troubleshoot connections without having to run new cables every time a change is needed."
    },
    {
      question: "What is the primary function of a repeater?",
      options: ["To connect different networks", "To amplify and regenerate a network signal", "To filter traffic based on MAC addresses", "To assign IP addresses"],
      answer: 1,
      hint: "The name of the device tells you what it does to the signal.",
      detailedExplanation: "A repeater is a Layer 1 device that receives a signal, cleans it up by removing noise and jitter, and then retransmits it at its original strength. This allows network signals to travel over longer distances than a single cable segment would allow."
    },
    {
      question: "Which of the following is a valid MAC address format?",
      options: ["00-1A-2B-3C-4D-5E", "192.168.1.1", "2001:0db8:85a3:0000:0000:8a2e:0370:7334", "FF-FF-FF-FF"],
      answer: 0,
      hint: "MAC addresses are a sequence of hexadecimal numbers.",
      detailedExplanation: "A MAC address is a 48-bit address, typically represented as a series of 12 hexadecimal digits (0-9, A-F). They are often formatted with hyphens or colons separating pairs of digits, such as '00-1A-2B-3C-4D-5E'."
    },
    {
      question: "What is the main purpose of a network diagram?",
      options: ["To provide a physical map of the building", "To document the network's logical and physical topology", "To display a list of all connected devices", "To track network performance over time"],
      answer: 1,
      hint: "Diagrams help you visualize the 'map' of the network.",
      detailedExplanation: "A network diagram is a visual representation of a computer network's infrastructure. It is used to document the physical layout of devices and cables (physical topology) as well as the logical flow of data (logical topology), which is crucial for planning, troubleshooting, and documentation."
    },
    {
      question: "Which of the following is a network security policy that defines which traffic is allowed and which is denied?",
      options: ["ACL", "VLAN", "DHCP", "DNS"],
      answer: 0,
      hint: "The name implies a 'list' of things that are 'access'ed.",
      detailedExplanation: "An ACL (Access Control List) is a set of rules that defines which network traffic is allowed to pass through a device (like a router or firewall) and which is to be denied. It is a fundamental component of network security."
    },
    {
      question: "What is the purpose of link aggregation (LAG)?",
      options: ["To combine multiple physical links into a single logical link", "To separate a single physical link into multiple logical links", "To provide a secure connection between two routers", "To manage a wireless network"],
      answer: 0,
      hint: "The name 'aggregation' means to combine or group things together.",
      detailedExplanation: "Link aggregation, or a LAG, is a technique to combine multiple network connections in parallel to increase throughput beyond what a single connection could sustain and to provide redundancy in case one of the links fails. It is also known as port trunking or bonding."
    },
    {
      question: "Which of the following is a connectionless protocol?",
      options: ["TCP", "FTP", "HTTP", "UDP"],
      answer: 3,
      hint: "It's the faster but less reliable counterpart to TCP.",
      detailedExplanation: "UDP (User Datagram Protocol) is a connectionless protocol that sends data without establishing a connection first. This makes it faster and more efficient for applications where speed is more important than reliability, such as streaming video or online gaming."
    }
];
