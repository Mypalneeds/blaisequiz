const questions = [
    {
        question: "What is a domain name?",
        options: [
            "A. The content of a website.",
            "B. The address where Internet users can access your website.",
            "C. The server hosting your website."
        ],
        answer: "B"
    },
    {
        question: "Which of the following is a correct example of a URL?",
        options: [
            "A. https://www.example",
            "B. www.example.com",
            "C. https://www.example.com"
        ],
        answer: "C"
    },
    {
        question: "Match the domain extension to its general use:\n.com, .store, .net, .biz, .com.ng",
        options: [
            "A. Commercial business",
            "B. Network infrastructure",
            "C. Online stores",
            "D. Businesses in Nigeria",
            "E. General businesses"
        ],
        answer: "A, C, B, E, D"
    },
    {
        question: "What is domain hosting?",
        options: [
            "A. A service that allows your website to be accessible on the Internet.",
            "B. The design layout of a website.",
            "C. The content management system for your website."
        ],
        answer: "A"
    },
    {
        question: "What does SSL do for a website?",
        options: [
            "A. Increases bandwidth.",
            "B. Secures data transmission.",
            "C. Provides email services."
        ],
        answer: "B"
    },
    {
        question: "What does bandwidth refer to in web hosting?",
        options: [
            "A. The amount of data that can be transferred in a given time period.",
            "B. The amount of storage space on a server.",
            "C. The number of webmail accounts available."
        ],
        answer: "A"
    },
    {
        question: "What is disk space in the context of web hosting?",
        options: [
            "A. The number of webmail accounts.",
            "B. The amount of storage available for website files.",
            "C. The speed of the server."
        ],
        answer: "B"
    },
    {
        question: "What is webmail?",
        options: [
            "A. Email accounts provided by your domain hosting.",
            "B. A tool for website analytics.",
            "C. The dashboard for your website."
        ],
        answer: "A"
    },
    {
        question: "What is the primary function of a website dashboard?",
        options: [
            "A. To store website data.",
            "B. To manage and monitor website content and performance.",
            "C. To provide email services."
        ],
        answer: "B"
    },
    {
        question: "What does an IP address stand for?",
        options: [
            "A. Internet Provider",
            "B. Internet Protocol",
            "C. Internal Process"
        ],
        answer: "B"
    },
    {
        question: "What does HTTPS stand for, and what is its purpose?",
        options: [
            "A. HyperText Transfer Protocol Secure, used to secure data transmission.",
            "B. HyperText Transfer Protocol Simple, used for simple websites.",
            "C. HyperText Transfer Protocol System, used for system websites."
        ],
        answer: "A"
    },
    {
        question: "What is the difference between themes and templates in web design?",
        options: [
            "A. Themes control the overall look and feel of a website, while templates are specific page layouts.",
            "B. Themes are specific page layouts, while templates control the overall look and feel.",
            "C. There is no difference between themes and templates."
        ],
        answer: "A"
    },
    {
        question: "What is the domain name in the URL https://www.TINASTORES.NG.com.net.biz.com.ng?",
        options: [
            "A. www.TINASTORES.NG",
            "B. TINASTORES.NG.com.net.biz.com.ng",
            "C. NG"
        ],
        answer: "B"
    },
    {
        question: "What is the domain extension in https://www.google.com?",
        options: [
            "A. google",
            "B. com",
            "C. www"
        ],
        answer: "B"
    },
    {
        question: "What indicates that https://dcbuzz.online is a secured link?",
        options: [
            "A. The .online extension",
            "B. The https protocol",
            "C. The dcbuzz name"
        ],
        answer: "B"
    },
    {
        question: "In the URL https://dcbuzz.online, identify the business name and domain extension.",
        options: [
            "A. Business Name: dcbuzz, Domain Extension: online",
            "B. Business Name: online, Domain Extension: dcbuzz",
            "C. Business Name: dcbuzz.online, Domain Extension: none"
        ],
        answer: "A"
    },
    {
        question: "In the URL https://TINA.UNINATURESPRIDE.COM, what is the domain name and what is the domain extension?",
        options: [
            "A. Domain Name: TINA.UNINATURESPRIDE, Domain Extension: COM",
            "B. Domain Name: UNINATURESPRIDE.COM, Domain Extension: TINA",
            "C. Domain Name: TINA, Domain Extension: UNINATURESPRIDE.COM"
        ],
        answer: "A"
    },
    {
        question: "Which of the following is NOT a common type of web hosting?",
        options: [
            "A. Shared Hosting",
            "B. Dedicated Hosting",
            "C. Network Hosting",
            "D. VPS Hosting (Virtual Private Server)"
        ],
        answer: "C"
    },
    {
        question: "What is a CMS used for in web design?",
        options: [
            "A. To manage and organize website content.",
            "B. To increase website bandwidth.",
            "C. To design website graphics."
        ],
        answer: "A"
    },
    {
        question: "Which of the following is a primary goal of SEO?",
        options: [
            "A. To create a more visually appealing website.",
            "B. To improve a website's ranking on search engines.",
            "C. To increase website bandwidth."
        ],
        answer: "B"
    },
    {
        question: "What is responsive web design?",
        options: [
            "A. A design that is compatible only with desktop computers.",
            "B. A design that adjusts to different screen sizes and devices.",
            "C. A design that uses high-resolution images only."
        ],
        answer: "B"
    },
    {
        question: "Which of the following is an example of an e-commerce platform?",
        options: [
            "A. WordPress",
            "B. Shopify",
            "C. Adobe Photoshop"
        ],
        answer: "B"
    },
    {
        question: "What is the purpose of website analytics tools?",
        options: [
            "A. To secure the website against malware.",
            "B. To track and report website traffic and user behavior.",
            "C. To design and edit images for the website."
        ],
        answer: "B"
    },
    {
        question: "Why is mobile optimization important for a website?",
        options: [
            "A. It increases the website's loading speed on all devices.",
            "B. It ensures the website functions well on mobile devices.",
            "C. It improves the website's visual design."
        ],
        answer: "B"
    },
    {
        question: "What is a plugin in web design?",
        options: [
            "A. A tool to increase the bandwidth of a website.",
            "B. An add-on that provides additional functionality to a website.",
            "C. A template used for the website layout."
        ],
        answer: "B"
    },
    {
        question: "Which of the following is NOT a common website security measure?",
        options: [
            "A. Using strong passwords.",
            "B. Regularly updating software and plugins.",
            "C. Reducing website bandwidth."
        ],
        answer: "C"
    },
    {
        question: "What does UX stand for, and why is it important in web design?",
        options: [
            "A. User Experience; it enhances user satisfaction and accessibility.",
            "B. User Extension; it adds more features to the website.",
            "C. User Example; it provides user case studies."
        ],
        answer: "A"
    },
    {
        question: "What are HTML and CSS used for in web design?",
        options: [
            "A. HTML is used for structuring content, and CSS is used for styling the content.",
            "B. HTML is used for styling the content, and CSS is used for structuring content.",
            "C. Both HTML and CSS are used for programming server-side functions."
        ],
        answer: "A"
    },
    {
        question: "What role does JavaScript play in web design?",
        options: [
            "A. It is used for creating static web pages.",
            "B. It is used for adding interactivity and dynamic content to web pages.",
            "C. It is used for web hosting services."
        ],
        answer: "B"
    },
    {
        question: "What is cloud hosting?",
        options: [
            "A. Hosting that uses a single server.",
            "B. Hosting that utilizes a network of virtual servers to host websites.",
            "C. Hosting that is exclusively for mobile websites."
        ],
        answer: "B"
    }
];

const quizForm = document.getElementById('quizForm');
const quizDiv = document.getElementById('quiz');
const timerDiv = document.getElementById('timer');
let timer;

function startTimer(duration) {
    let time = duration;
    timer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDiv.textContent = `Time Left: ${minutes}:${seconds}`;
        if (--time < 0) {
            clearInterval(timer);
            submitForm();
        }
    }, 1000);
}

function generateQuiz() {
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('form-group');
        questionElement.innerHTML = `
            <label>${q.question}</label>
            ${q.options.map((option, i) => `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question${index}" value="${option[0]}" required>
                    <label class="form-check-label">${option}</label>
                </div>
            `).join('')}
        `;
        quizDiv.appendChild(questionElement);
    });
}

function submitForm() {
    const formData = new FormData(quizForm);
    const fullName = formData.get('fullName');
    const answers = questions.map((q, index) => formData.get(`question${index}`)).join(', ');

    emailjs.send("service_tdogs3o", "template_smyngud", {
        full_name: fullName,
        answers: answers    
    }).then(response => {
        alert('Your answers have been submitted.Thank You for Completing the Quiz');
        quizForm.reset();
    }).catch(error => {
        alert('There was an error submitting your answers.');
    });
}

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearInterval(timer);
    submitForm();
});

window.onload = () => {
    generateQuiz();
    startTimer(40000);
    emailjs.init("QGBB5fusm3TfVtof5");
};
