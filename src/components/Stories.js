// This component holds the story page

import { useEffect,useState } from 'react';
import {Card, Button, Accordion, Container,Row,Image, Col} from 'react-bootstrap';
import { Chat, Trophy} from 'react-bootstrap-icons';
import userimg from '../images/2.jpg'
import moment from 'moment';
import Config from '../Config';

const Stories = () => {

    const [state, setState]=useState({
        topStoriesId:[], 
        commentList: [], 
        loading: true,
        storyId: false
    })

    useEffect(()=>{
        getTopStory()
    },[])

    const getTopStory=()=>{
        fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
        .then((response) =>response.json())
        .then((data) => {
            var topStoriesId = data.slice(Math.max(data.length - 10))
            setState({
                ...state, 
                topStoriesId,
                storyId: 0
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(()=>{
        if(state.storyId!==false){
            showStory(state.topStoriesId[state.storyId])
        }
    },[state.storyId])

    const showStory = async(id) => {
        setState({...state, loading: true})
        await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then((response) =>response.json())
        .then(async(data) => {
            data.time = moment(data.time).format(Config.dateTimeFormat)
            if(data.kids){
                var dataLength = 20
                if(data.kids.length<20){
                    dataLength = data.kids.length;
                }
                for(let i=0; i<dataLength; i++){
                    await getComments(data.kids[i])
                }
            }
            setState({
                ...state,
                loading: false,
                storyDetails: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const getComments=async(id)=>{
        setState({...state, loading: true})
        await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then((response) =>response.json())
        .then((data) => {
            var commentList = state.commentList;
            data.time = moment(data.time).format(Config.dateTimeFormat)
            commentList.push(data)
            setState({
                ...state,
                commentList,
                loading: false
            })
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const _renderComments = () =>{
        var comments = state.commentList.filter((i)=>{return i})
        return comments.map((comment, key) => {
            return (
                <div key={key} className="comment-box">
                    <div className="comment-left">
                        <Image 
                            src={userimg} 
                            roundedCircle 
                            className="comment-pic" 
                        />
                    </div>
                    <div className="comment-right">
                        <p className="comment-by">{comment?.by}</p>
                        <p className="comment-text">{comment?.text}</p>
                        <p className='text-right'>{comment?.time}</p>
                    </div>
                </div>
            );
        })
    }

    const handleClickActionButton = (storyId) => {
        setState({
            ...state,
            commentList: [],
            storyId
        })
    }
  
    console.log(999, state)

  return (
        
        state.loading ?
        <div className='page-loading'>
            Loading...
        </div> :
        <div className="story-div">
            <h1 className="main-heading">10 great short stories everyone should read</h1>
            <Container className='text-right' style={{marginBottom: 20}}>
                {
                    state.storyId>0 &&
                    <Button 
                        variant="light" 
                        size="sm"
                        disabled={state.commentLoading}
                        onClick={()=>handleClickActionButton(state.storyId-1)}
                    >
                        Back
                    </Button>
                }
                {
                    state.storyId<9 &&
                    <Button 
                        variant="light" 
                        size="sm"
                        disabled={state.commentLoading}
                        onClick={()=>handleClickActionButton(state.storyId+1)}
                    >
                        Next
                    </Button>
                }
            </Container>
            
            <Container className="box-design">
                <Row>
                    <Col xs={12} md={12}>
                        <h5 className="story-title">{state.storyDetails?.title}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="user-info">
                            <div className="user-pic">
                                <Image src={userimg} roundedCircle height="50px"/>
                            </div>
                            <div className="user-name">
                                <p className="writer-name"><b>{state.storyDetails?.by}</b></p>
                                <p className="date">{state.storyDetails?.time}</p>
                            </div>
                        </div>
                        {
                            state.storyDetails?.url &&
                            <Button 
                                variant="danger" 
                                size="sm" 
                                style={{marginTop: 20}}
                                onClick={()=>window.open(state.storyDetails?.url)}
                            >
                                Read More...
                            </Button>
                        }
                    </Col>
                </Row>
                <Container className="box-design">
                    <Row>
                        <Col md={12}>
                            <Accordion defaultActiveKey="0">
                                <div className="comment-head">
                                    <Button 
                                        variant="light" 
                                        size="sm"
                                    >
                                        <span className="icon"><Trophy /></span>
                                        Score <b>{state.storyDetails?.score}</b>
                                    </Button>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <span className="icon"><Chat /></span>
                                            Comments <b>{state.storyDetails?.kids ? state.storyDetails?.kids?.length : 0}</b>
                                    </Accordion.Toggle>
                                    <Button variant="light" size="sm">
                                        Descendants <b>{state.storyDetails?.descendants}</b>
                                    </Button>
                                </div>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="p-0">
                                        {
                                            state.commentList && state.commentList.length>0 &&
                                            _renderComments()
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
  );
}

export default Stories;
