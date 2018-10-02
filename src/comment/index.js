import React,{Component} from 'react';
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class Comment extends Component{
    constructor(props){
        super(props)
        this.state={
            comments:[]
        }
    }

    handleSubmitComment=(value)=>{
        this.state.comments.push(value)
        this.setState({comments:this.state.comments})
    }

    render(){
        console.info('conments',this.state.comments)

        return (
            <div style={{width:500}}>
                <CommentInput onSubmit={(value)=>this.handleSubmitComment(value)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }

}

export default Comment;