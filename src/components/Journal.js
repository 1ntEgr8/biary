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
		console.log(messages[5]);
		messages.map((data, index)=>{
			diaryViews.push(
				<div className='container mb-4'>
					<div className="card" >
						<div className='card-body'>
							<img src={messages[index]['image']} className='mb-3'/>
							<h5 className='card-title'>Journal {index+1}</h5>
							<h6 className='card-subtitle mb-2 text-muted'>{messages[index]['createdAt'].substring(0,10)}</h6>
							<p className='card-text'>{messages[index]['message']}</p>
							<p className='card-subtitle text-muted'>Sentiment value: {messages[index].sentiment}</p>
						</div>
				</div>
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
				<div className='jumbotron bg-info'>
					<div className='d-flex justify-content-center text-white'>
					<h1>Your Biary</h1>
					</div>
				</div>
			<p>{diaryViews}</p>
     </div>
    );
  }
}

export default Journal;
