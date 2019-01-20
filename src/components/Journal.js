import React, {Component} from 'react';
import axios from 'axios';

class Journal extends Component{
	constructor(props){
		super(props);

		this.state = {
			messages: []
		};
	};

	componentDidMount(){
			fetch('http://localhost:3001/api/getData')
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				this.setState({
					messages: data['data']
				})
			})
	}

	diaryViews = [];
  render(){
		const {messages} = this.state;

		let diaryViews = [];

		messages.map((data, index)=>{
			diaryViews.push(
				<div>
				<h1>Journal {index+1}</h1>
				<small>{messages[index]['createdAt'].substring(0,10)}</small>
				<p>{messages[index]['message']}</p>
				<img src={messages[index]['']}/>
				</div>
			)
		})
		// function getViews(){
		// let diaryViews = [];
		// axios.get('http://localhost:3001/api/getData')
    //   .then(res => {
    //      let entries = res.data;
		// 		 console.log(entries)
		// 			entries['data'].map((item, index)=>{
		// 				diaryViews.push(<h1>item['message']</h1>);
		// 			});
		// 			console.log(diaryViews)
		// 			return diaryViews;
    //   })
		// }
    return(
      <div>
      <h1>Journal view page</h1>
			<p>{diaryViews}</p>
     </div>
    );
  }
}

export default Journal;
