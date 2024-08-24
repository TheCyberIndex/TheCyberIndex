// JavaScript to hide navbar on scroll down and show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 10) {
        // User is scrolling down and is not at the very top of the page
        navbar.style.top = '-100px';  // Adjust this value based on the height of your navbar
    } else {
        // User is scrolling up or is at the top of the page
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});


// Array to store articles
let articles = [];

// Function to add a new article
function addArticle(title, content) {
    // Create a new article object
    const article = {
        title: title,
        content: content
    };

    // Add the article to the beginning of the articles array (newest at the top)
    articles.unshift(article);

    // Update the display
    displayArticles();
}

// Function to display articles on the page
function displayArticles() {
    const newsSection = document.querySelector('.news-section');
    newsSection.innerHTML = ''; // Clear the section before updating

    // Loop through the articles array and add each one to the page
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // Create and append the title
        const titleElement = document.createElement('h2');
        titleElement.innerHTML = `<strong>${article.title}</strong>`;
        articleDiv.appendChild(titleElement);

        // Create and append the content
        const contentElement = document.createElement('div'); // Use 'div' instead of 'p' for more flexibility
        contentElement.innerHTML = article.content;
        articleDiv.appendChild(contentElement);

        // Append the article to the news section
        newsSection.appendChild(articleDiv);
    });
}

// Adding an article
addArticle(
    'Cybercriminals Exploit PHP Flaw to Secretly Install Msupedge Backdoor',
    `
    <p>It is believed that the Msupedge backdoor was deployed by exploiting a recently uncovered critical vulnerability in PHP (CVE-2024-4577, CVSS score: 9.8), which allows for remote code execution.</p>
    <p>The backdoor is implemented as a dynamic-link library (DLL) that is installed in specific directories, namely "csidl_drive_fixed\\xampp" and "csidl_system\\wbem." One of these DLLs, wuplog.dll, is activated by the Apache HTTP server (httpd), while the parent process for the other DLL has not yet been identified.</p>
    <p>What makes Msupedge particularly noteworthy is its use of DNS tunneling to communicate with its C&C server, leveraging code based on the open-source dnscat2 tool.</p>
    <p>"Msupedge receives commands by performing name resolution via DNS traffic," Symantec explained. "It not only retrieves commands through this method but also uses the resolved IP address of the C&C server (ctl.msedeapi[.]net) as a command input."</p>
    <p>Specifically, the third octet of the resolved IP address acts as a switch case, determining the backdoor’s behavior by subtracting seven from it and using its hexadecimal value to trigger specific actions. For instance, if the third octet is 145, the derived value would be 138 (0x8a).</p>
    <pre>
    0x8a: Create a process using a command received via a DNS TXT record
    0x75: Download a file using a URL received via a DNS TXT record
    0x24: Sleep for a specified time interval
    0x66: Sleep for a specified time interval
    0x38: Create a temporary file "%temp%\\1e5bf625-1678-zzcv-90b1-199aa47c345.tmp" for an unknown purpose
    0x3c: Delete the temporary file "%temp%\\1e5bf625-1678-zzcv-90b1-199aa47c345.tmp"
    </pre>
    <p>This discovery coincides with reports that the UTG-Q-010 threat group has launched a new phishing campaign, using cryptocurrency- and job-related bait to distribute the open-source malware known as Pupy RAT.</p>
    <p>Symantec noted, "The attack chain involves the use of malicious .lnk files embedded with a DLL loader, ultimately leading to the deployment of the Pupy RAT payload. Pupy is a Python-based Remote Access Trojan (RAT) capable of reflective DLL loading and in-memory execution, among other functions."</p>
    <p> August 22, 2024
    <p><a href= "https://thehackernews.com/2024/08/hackers-exploit-php-vulnerability-to.html" target="_blank">Source</a> </p>

    `

);

addArticle(
    'As AI Scams Surge, New Software Steps Up to Fight Back',
     `
    <p>McAfee, a leader in cybersecurity, has rolled out a new deepfake detection tool to address the growing threat of AI-powered scams and misinformation.</p>
    <p>Deepfake videos, crafted with AI, have become increasingly common across the internet and social media. In response, McAfee introduced the McAfee Deepfake Detector, which is available exclusively on select Lenovo AI PCs. This tool offers real-time alerts to users who opt in, notifying them within seconds if AI-altered audio is detected in videos. Lenovo AI PC users can take advantage of a 30-day free trial, with the service priced at $9.99 for the first year, as stated by McAfee.</p>
    <p>Steve Grobman, McAfee's Chief Technology Officer, emphasized the risks posed by deepfakes, noting, "The most concerning deepfakes we've encountered involve AI that enables cybercriminals to create highly convincing impersonations, tricking victims into believing they are interacting with legitimate sources."</p>
    <p>Grobman highlighted incidents where deepfake videos feature prominent individuals like Warren Buffett and YouTube star MrBeast, promoting fake cryptocurrency giveaways. Additionally, other scams involve celebrities endorsing non-existent promotions, targeting fans to extract personal information or money for products that will never be delivered, Grobman added.</p>
    <p>According to McAfee, victims have reported losses ranging from $250 to over half a million dollars, as cybercriminals increasingly deploy sophisticated and personalized AI-generated scams on a large scale.</p>
    <p> August 22, 2024</p>
    <p><a href="https://www.foxbusiness.com/technology/ai-scams-proliferating-new-tool-attempting-combat-them" target="_blank">Source</a></p>

    `


)

addArticle(
    'Cyberattack Halts Operations at Microchip Technology Manufacturing Plants',
    `
    <p>US-based semiconductor supplier Microchip Technology (NASDAQ: MCHP) has reported a cyberattack that has disrupted operations at several of its manufacturing facilities.</p>
    <p>In a regulatory filing on Tuesday, the company disclosed that it first noticed unusual activity on its IT systems on August 17, and by August 19, it confirmed that certain servers and business processes had been compromised.</p>
    <p>In response to the breach, Microchip has isolated the affected systems and shut down some operations. The company has also brought in external cybersecurity experts to help investigate the incident.</p>
    <p>"Due to this incident, some of our manufacturing facilities are operating below normal capacity, and our ability to fulfill orders has been impacted," the company stated. "We are working quickly to restore the affected IT systems, resume normal business operations, and minimize the impact of this incident."</p>
    <p>Microchip has not yet determined if the breach will have a significant financial impact. This update follows SEC regulations that require companies to disclose any material breaches within four business days of determining their significance.</p>
    <p>While the company has not provided detailed information, the description suggests that this may be a ransomware attack. However, no known ransomware group has claimed responsibility, which is typical as cybercriminals often wait for negotiations to break down before publicly naming their victims.</p>
    <p>Microchip Technology is a key provider of microcontroller, mixed-signal, analog, and Flash-IP solutions, serving approximately 123,000 customers across various industries, including industrial, automotive, consumer, aerospace and defense, communications, and computing sectors.</p>
    <p>The company recently achieved the status of a CVE Numbering Authority (CNA), allowing it to assign CVE identifiers to vulnerabilities found in its products.</p>
    <p> August 22, 2024</p>
     <p><a href="https://www.securityweek.com/cyberattack-disrupts-microchip-technology-manufacturing-facilities/" target="_blank">Source</a></p>
    `
)

addArticle(
    'Halliburton Reels from Cyberattack, Operations Thrown into Chaos',

    `<p>Halliburton, a major player in the oilfield services industry, is currently dealing with a severe cyberattack that has disrupted operations at its Houston headquarters and impacted some of its global networks.</p>
<p>An anonymous source familiar with the situation initially reported the incident to Reuters, highlighting the sensitive nature of the event.</p>
<p>While Halliburton has not officially confirmed the cyberattack, the company acknowledged an "issue" affecting certain systems. In a statement, a Halliburton spokesperson said, "We are aware of an issue affecting certain company systems and are working diligently to assess the cause and potential impact. We have activated our pre-planned response plan and are working internally and with leading experts to remediate the issue."</p>
<p>Although specific details of the attack remain unclear, its impact on business operations is undeniable. Employees at the North Houston campus have been advised to avoid connecting to internal networks, and the company is collaborating with cybersecurity experts to resolve the issue, according to Reuters.</p>
<p>Cyberattacks are increasingly targeting the energy sector, posing significant challenges for companies managing critical infrastructure.</p>
<p>The 2021 ransomware attack on the Colonial Pipeline serves as a stark reminder of the potential consequences, leading to fuel shortages and price spikes across the United States. Such events emphasize the vulnerability of essential services to cyber threats and the necessity for strong cybersecurity defenses.</p>
<p>Halliburton, which operates in over 70 countries and employs nearly 48,000 people, is one of the world's largest oilfield services companies, providing drilling services and equipment to major energy producers worldwide.</p>
<p>Given the company's vast operations, this cyberattack raises concerns about the broader implications for the energy industry and the potential for similar incidents in the future.</p>
<p>As details continue to emerge, the Energy Department and the American Petroleum Institute have yet to comment on the situation, leaving the industry on high alert. This attack highlights the growing risk of cyber-enabled economic warfare, where malicious actors target critical economic assets to cause widespread disruption and financial loss.</p>
<p>Halliburton is actively working to mitigate the effects of the attack, stressing the importance of protecting vital infrastructure from cyber threats. The company has reassured stakeholders that it is taking all necessary steps to resolve the issue and restore normal operations as quickly as possible.</p>


<p> August 22, 2024</p>
     <p><a href="https://cybersecuritynews.com/halliburton-cyberattack/" target="_blank">Source</a></p>
    `

)

addArticle(
    'PG_MEM Malware Surfaces, Hijacking PostgreSQL Databases for Crypto Mining Operations',
    `<p>Cybersecurity experts have identified a new malware strain named PG_MEM, which targets PostgreSQL database instances to mine cryptocurrency after gaining access through brute-force attacks.</p>
    <p>According to Assaf Morag, a security researcher at Aqua, these brute-force attacks involve systematically attempting to guess database credentials, exploiting weak passwords until access is obtained. Once the attackers break in, they can use the COPY ... FROM PROGRAM SQL command to execute arbitrary shell commands on the host system, enabling them to carry out malicious activities such as stealing data or deploying malware.</p>
    <p>The attack sequence observed by the cloud security firm focuses on vulnerable PostgreSQL databases, where the attackers create an administrator role and utilize the PROGRAM feature to execute shell commands.</p>
    <p>After successfully brute-forcing the database, the attackers conduct an initial reconnaissance and execute commands to remove superuser privileges from the "postgres" user. This step prevents other potential attackers from exploiting the same access method.</p>
    <p>The shell commands used in this attack drop two payloads from a remote server located at "128.199.77[.]96." These payloads, named PG_MEM and PG_CORE, are designed to eliminate competing processes (such as Kinsing), establish persistence on the host, and eventually deploy a Monero cryptocurrency miner.</p>
    <p>This process leverages the PostgreSQL COPY command, which facilitates copying data between a file and a database table. The attack specifically abuses a parameter called PROGRAM, which allows the server to execute the provided command and record the results in the database.</p>
    <p>While the primary goal of this campaign appears to be cryptocurrency mining, Morag warns that the attackers also gain the ability to execute commands, access data, and control the server.</p>
    <p>Morag notes that this campaign targets PostgreSQL databases exposed to the internet with weak passwords, a common vulnerability resulting from misconfigurations and inadequate identity controls.</p>
    <p>This disclosure follows a report from Datadog Security Labs about an opportunistic attack campaign that exploits the Log4Shell vulnerability (CVE-2021-44228, CVSS score: 10.0) in Apache Log4j. In that campaign, attackers deploy an obfuscated bash script to gather system information, install an XMRig miner, and set up a reverse shell for remote access.</p>
    <p> August 23, 2024</p>
    <p><a href="https://thehackernews.com/2024/08/new-malware-pgmem-targets-postgresql.html" target="_blank">Source</a></p>`
);

