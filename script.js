// Phishing scenarios
const scenarios = [
    {
        type: 'login',
        title: 'Company Portal Login',
        description: 'Please sign in to access your company resources',
        warning: '⚠️ This is a simulated phishing attempt! Real company portals should use secure authentication methods and proper domain names.'
    },
    {
        type: 'urgent',
        title: 'Urgent: Account Security Alert',
        description: 'Your account has been compromised. Click here to verify your identity.',
        warning: '⚠️ This is a simulated phishing attempt! Real security alerts should come from official channels and never ask for immediate action.'
    },
    {
        type: 'reward',
        title: 'Congratulations! You\'ve Won!',
        description: 'Click here to claim your prize',
        warning: '⚠️ This is a simulated phishing attempt! Be wary of unexpected rewards or prizes.'
    }
];

let currentScenario = 0;

// Initialize the simulation
function initSimulation() {
    const scenario = scenarios[currentScenario];
    document.querySelector('h1').textContent = scenario.title;
    document.querySelector('form').insertAdjacentHTML('afterbegin', 
        `<p class="description">${scenario.description}</p>`);
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const scenario = scenarios[currentScenario];
    const warning = document.getElementById('phishingWarning');
    warning.innerHTML = `
        <h2>${scenario.warning}</h2>
        <p>You just encountered a simulated phishing attempt!</p>
        <p>Key indicators of this phishing attempt:</p>
        <ul>
            <li>${getPhishingIndicators(scenario.type)}</li>
        </ul>
        <a href="training.html">Learn How to Spot Phishing</a>
    `;
    warning.classList.remove('hidden');
    
    // Log simulated phishing attempt
    logPhishingAttempt(scenario);
    
    // Simulate security alert animation
    warning.style.animation = 'alertPulse 1s';
});

// Get phishing indicators based on scenario type
function getPhishingIndicators(type) {
    const indicators = {
        login: 'Suspicious domain or URL structure',
        urgent: 'Creates false sense of urgency',
        reward: 'Too good to be true offer'
    };
    return indicators[type] || 'Suspicious request for information';
}

// Log phishing attempt
function logPhishingAttempt(scenario) {
    const logData = {
        scenario: scenario.type,
        email: document.getElementById('email').value,
        password: '********', // Mask password for security
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        indicators: getPhishingIndicators(scenario.type)
    };
    
    console.log('Phishing simulation triggered:', logData);
    
    // In a real implementation, you would send this to a backend server
    // fetch('/api/log-phishing', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(logData)
    // });
}

// Add animation for security alert
const style = document.createElement('style');
style.textContent = `
@keyframes alertPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
}

.description {
    color: #666;
    margin-bottom: 20px;
    font-style: italic;
}

#phishingWarning ul {
    margin: 10px 0;
    padding-left: 20px;
}

#phishingWarning li {
    margin: 5px 0;
}
`;
document.head.appendChild(style);

// Initialize the simulation when the page loads
document.addEventListener('DOMContentLoaded', initSimulation);