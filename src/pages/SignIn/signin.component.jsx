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
                        <Button onClick={() => console.log(props.firebase.firebase.doSignInWithPopup())}> Sign in with Google</Button>
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