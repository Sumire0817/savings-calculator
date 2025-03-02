// Initialize Feather icons 
feather.replace();
// Roadmap Step 1: Select DOM elements
const progressBarEl = document.getElementById("progress-bar");
const resultEl = document.getElementById("result");

const btnEl = document.getElementById("calculate-btn");

// Roadmap Step 2: Add event listener for calculate button   
btnEl.addEventListener("click", () => {
    const goalsEl = document.getElementById("goal-amount").value;
    const savingsEl = document.getElementById("current-savings").value;
    const contributionEl = document.getElementById("monthly-contribution").value;
    
// Roadmap Step 3: Validate user input
    if (goalsEl.trim() === "" || savingsEl.trim() === "" || contributionEl.trim() === "") {
        alert("Please don't leave any fields empty");
        return; 
    }

    const goal = parseFloat(goalsEl);
    const savings = parseFloat(savingsEl);
    const contribution = parseFloat(contributionEl);

// Roadmap Step 4: Calculate remaining amount and months to reach goal
    const remainingAmount = goal - savings;
    const monthsToReach = Math.ceil(remainingAmount/contribution);
    const progressPercentage = (savings/goal)*100;

// Roadmap Step 5: Update progress bar based on current savings
    progressBarEl.style.width = `${progressPercentage}%`;

// Roadmap Step 6: Display result based on the savings progress
    resultEl.classList.remove("show");
// Roadmap Step 7: Handle UI updates and transitions for result display
    setTimeout(()=>{
        if(savings < goal){
            resultEl.innerHTML = `You will reach your goal in ${monthsToReach} months`;
        }else{
            resultEl.innerHTML = "🎉 Congratulations, You have reached your goal!";
        }
        resultEl.classList.add("show");
    }, 100); // Slight delay for transition
});