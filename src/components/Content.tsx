import React, {useState} from 'react'
import {Row, Col, Button, Space, Modal} from 'antd'

import ContentForm from './ContentForm'
import Notice from './Notice'


export default function Content() {
    const contentBg = {
        background: 'url(https://use.sevencdn.com/2020/01/25/KEScJXCBfAzaIjW.png) no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '95vh'
    }
    const lineOne = {
        fontSize: 30,
        fontWeight: 700,
        color: '#ffffff',
    }
    const lineTwo = {
        fontSize: 20,
        fontWeight: 400,
        color: '#ffffff',
    }

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Row style={contentBg}>
            <Col lg={{span: 14, offset: 5}}
                 xs={{span: 22, offset: 1}}
                 className="display-flex align-center justify-around"
            >
                <div className="text-center">
                    <Notice/>

                    <span style={lineOne}>欢迎使用 Office</span><br/>
                    <span style={lineTwo}>你可在这里自助开通 A1 子号。</span>
                    <br/>
                    <br/>

                    <Space>
                        <Button style={{width: 110}}
                                type="primary" danger size="large"
                                onClick={() => setModalVisible(v => !v)}
                        >
                            获取 Office
                        </Button>
                        <Modal
                            title="获取 Office"
                            centered
                            visible={modalVisible}
                            width={1000}
                            maskClosable={false}
                            destroyOnClose
                            footer={false}
                            onCancel={() => setModalVisible(false)}
                        >
                            <ContentForm/>
                        </Modal>

                        <Button style={{width: 110}}
                                size="large"
                                onClick={() =>
                                    window.open(
                                        'https://office.com/login'
                                    )}
                        >
                            登录
                        </Button>
                    </Space>
                </div>
            </Col>
        </Row>
    )
}
