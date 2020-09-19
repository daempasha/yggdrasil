import React from 'react';
import './signin.styles.scss';
import { Row, Col, Card, Divider, Button, Form} from 'antd';
import { connect } from 'react-redux';

function SignIn(props){
    return (
        <div className='sign-in'>
            <Card className='container' bordered={false}>
                <h1 className='title'>Yggdrasil</h1>
                <Divider />
                <Form className='form' layout='vertical'>
                    <Form.Item>
                        <Button icon={<img style={{paddingRight: '0.5em'}} src='https://www.iconfinder.com/data/icons/social-media-2210/24/Google-16.png'/>} onClick={() => 
                            {
                                const result = props.firebase.token.doSignInWithPopup();

                                if(result.status){
                                    console.log(result);
                                }
                                else {
                                    console.log(result);
                                }
                            }
                        }>Sign in with Google</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    firebase: state.firebase
})

export default connect(mapStateToProps)(SignIn);