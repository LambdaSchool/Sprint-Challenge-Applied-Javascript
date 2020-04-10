// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const topicReq = axios.get( "https://lambda-times-backend.herokuapp.com/topics")
// topicReq.then(res => console.log(res.data))

let topics = document.getElementsByClassName('topics')[0] //parent element to append to 

function newTab( tabName){
	 let div = document.createElement('div')
	 div.classList.add('tab')
	 div.innerText = tabName 
	 topics.appendChild(div)

}

newTab('all') // new tab component


topicReq.then(res => { 						// iterate through all topics making new tabs for each
	const topicArr = res.data.topics
	topicArr.forEach(item => newTab(item))
})
