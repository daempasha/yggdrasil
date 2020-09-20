import React from 'react';
import './signin.styles.scss';
import { Row, Col, Card, Divider, Button, Form, Input, message} from 'antd';
import { connect } from 'react-redux';
import Logo from '../../assets/celticknot.svg';

function SignIn(props){
    return (
        <div className='sign-in'>
            <Card className='container' bordered={false}>
                <div className='logo-container'>
                    <img className='logo'src={Logo}/>
                </div>
                <h1 className='title'>Yggdrasil</h1>
                <Divider />
                <Form className='form' layout='vertical'>
                    <Form.Item label='Email:' className='mb-1'>
                        <Input size='small' />
                    </Form.Item>
                    <Form.Item label='Password:'>
                        <Input.Password size='small'   />
                    </Form.Item>
                    <Form.Item> 
                        <Button type="primary" block>Sign in</Button>
                    </Form.Item>
                    <div><a>Forgot password?</a></div>
                    <div><a>Need an account?</a></div>
                    <Divider>or</Divider>
                    <Form.Item>
                        <Button icon={<img style={{paddingRight: '0.5em'}} src='https://www.iconfinder.com/data/icons/social-media-2210/24/Google-16.png'/>} onClick={() => 
                            {
                                props.firebase.token.auth().signInWithPopup(props.firebase.token.provider).then(function(result) {
                                    // This gives you a Google Access Token. You can use it to access the Google API.
                                    var token = result.credential.accessToken;
                                    // The signed-in user info.
                                    var user = result.user;
                                    message.success(`Thank you for signing in ${user.displayName}. Redirecting you shortly.`);
                                    
                                    //Save user in Redux
                                
                                    //Save user in Firebase database

                                    //Redirect to the normal page
                                }).catch(function(error) {
                                    // Handle Errors here.
                                    var errorCode = error.code;
                                    var errorMessage = error.message;
                                    // The email of the user's account used.
                                    var email = error.email;
                                    // The firebase.auth.AuthCredential type that was used.
                                    var credential = error.credential;
                                    // ...
                                    message.error(`${errorMessage}`);
                                });
                            }
                        }>Continue with Google</Button>
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