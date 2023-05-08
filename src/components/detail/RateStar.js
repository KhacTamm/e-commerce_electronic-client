import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import config from '../../config'

import { getFirstCharacterUser } from '../../untils'

import { useSelector, useDispatch } from 'react-redux'
// import { reviewProduct } from '../../actions/ProductAction'
import { reviewProduct } from '../../redux/actions/ProductAction'

import { StarOutlined } from '@ant-design/icons'
import { Rate, Row, Col, Divider, Progress } from 'antd'
import { RiSendPlaneFill } from 'react-icons/ri'

function RateStar(props) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useNavigate()

    const [star, setStar] = useState(0)
    const [showRate, setShowRate] = useState(false)
    const [showEvaluate, setShowEvalute] = useState(false)
    const [evaluate, setEvaluate] = useState('')

    const userSignin = useSelector((state) => state.getUsers)
    const { userInfo } = userSignin
    const product = useSelector((state) => state.getProductById.product)

    // console.log(product)

    const countReview = product.reviews.length
    // let averageRate = Math.round(product.reviews.reduce((a, c) => a + c.star, 0) / countReview)
    let averageRate = (product.reviews.reduce((a, c) => a + c.star, 0) / countReview).toFixed(1)

    if (userInfo) {
        var existsUser = product.reviews.find((x) => x.name == userInfo.name)
    }

    // console.log(existsUser)

    const fiveStar = Math.round((product.reviews.filter((x) => x.star === 5).length / countReview) * 100)
    const fourStar = Math.round((product.reviews.filter((x) => x.star === 4).length / countReview) * 100)
    const threeStar = Math.round((product.reviews.filter((x) => x.star === 3).length / countReview) * 100)
    const twoStar = Math.round((product.reviews.filter((x) => x.star === 2).length / countReview) * 100)
    const oneStar = Math.round((product.reviews.filter((x) => x.star === 1).length / countReview) * 100)

    const onFinish = (value) => {
        const review = {
            name: userInfo.name,
            star: star,
            comment: evaluate,
        }
        dispatch(reviewProduct(id, review))
        setEvaluate('')
        setShowEvalute(false)
        setShowRate(false)
    }
    const setRate = (value) => {
        setStar(value)
        setShowEvalute(true)
    }
    const toLogin = () => {
        history(`${config.routes.login}`)
    }

    return (
        <div className="">
            <Row>
                <Col span={18} xs={24} sm={24} md={24} style={{ minWidth: '100%' }}>
                    <h4 className="rate-star-title">Đánh giá & nhận xét {product.name}</h4>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div className="rate">
                        <div className="rate-info">
                            <Row>
                                <Col
                                    span={7}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <p className="star-average-num">
                                        <span style={{ marginBottom: 0, fontSize: '2.8rem' }}>
                                            {isNaN(averageRate) ? 0 : averageRate}{' '}
                                        </span>
                                        <span style={{ marginBottom: 0, fontSize: '2.3rem' }}>trên 5</span>
                                        {/* <StarOutlined
                                            style={{
                                                fontSize: '23px',
                                                color: 'orange',
                                                fontWeight: 'bolder',
                                                paddingBottom: '3px',
                                            }}
                                        ></StarOutlined> */}
                                    </p>
                                    <p
                                        className="star-average"
                                        style={{
                                            textTransform: 'uppercase',
                                            fontSize: '18px',
                                            lineHeight: '3rem',
                                            fontWeight: '500',
                                        }}
                                    >
                                        sao trung bình
                                    </p>
                                    <p
                                        className="start-number"
                                        style={{ fontSize: '1.6rem', lineHeight: '3.2rem', fontWeight: '350' }}
                                    >
                                        <strong>{product.reviews.length}</strong> đánh giá và nhận xét
                                    </p>
                                </Col>
                                <Col span={10}>
                                    <li className="thongke">
                                        <div className="numstar">
                                            5 <StarOutlined style={{ color: 'orange', margin: '0 5px' }}></StarOutlined>
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}>
                                            <Progress
                                                status="active"
                                                percent={fiveStar}
                                                strokeColor="orange"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    fontSize: '15px',
                                                }}
                                            />
                                        </p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">
                                            4 <StarOutlined style={{ color: 'orange', margin: '0 5px' }}></StarOutlined>
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}>
                                            <Progress
                                                status="active"
                                                percent={fourStar}
                                                strokeColor="orange"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    fontSize: '15px',
                                                }}
                                            />
                                        </p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">
                                            3 <StarOutlined style={{ color: 'orange', margin: '0 5px' }}></StarOutlined>
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}>
                                            <Progress
                                                status="active"
                                                percent={threeStar}
                                                strokeColor="orange"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    fontSize: '15px',
                                                }}
                                            />
                                        </p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">
                                            2 <StarOutlined style={{ color: 'orange', margin: '0 5px' }}></StarOutlined>
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}>
                                            <Progress
                                                status="active"
                                                percent={twoStar}
                                                strokeColor="orange"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    fontSize: '15px',
                                                }}
                                            />
                                        </p>
                                    </li>
                                    <li className="thongke">
                                        <div className="numstar">
                                            1 <StarOutlined style={{ color: 'orange', margin: '0 5px' }}></StarOutlined>
                                        </div>
                                        <p className="percent" style={{ display: 'flex' }}>
                                            <Progress
                                                status="active"
                                                percent={oneStar}
                                                strokeColor="orange"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    fontSize: '15px',
                                                }}
                                            />
                                        </p>
                                    </li>
                                </Col>
                                {existsUser ? (
                                    ''
                                ) : (
                                    <Col
                                        span={7}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <button
                                            className="guidanhgia"
                                            onClick={() => {
                                                userInfo ? setShowRate(true) : toLogin()
                                            }}
                                        >
                                            {' '}
                                            Gửi đánh giá{' '}
                                        </button>
                                    </Col>
                                )}
                            </Row>
                        </div>
                        {showRate ? (
                            <div
                                className="rate-star"
                                style={{ fontSize: '15px', fontWeight: 'bold', padding: '1rem 0' }}
                            >
                                Vui lòng chọn đánh giá: <Rate onChange={setRate} />
                            </div>
                        ) : (
                            ''
                        )}
                        {showEvaluate ? (
                            <div className="rate-send">
                                <p>Đánh giá: </p>
                                <textarea
                                    placeholder="Vui lòng đánh giá sản phẩm ở đây"
                                    onChange={(e) => setEvaluate(e.target.value)}
                                ></textarea>
                                <button className="guidanhgia" onClick={() => onFinish()}>
                                    <RiSendPlaneFill></RiSendPlaneFill>
                                    Gửi{' '}
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </Col>
            </Row>

            <Row style={{ marginTop: '1rem' }}>
                <div className="all-start">
                    {product.reviews.map((item) => (
                        <Col span={24} align="start">
                            <div className="danhgia">
                                <div className="all-comment-info">
                                    <p className="all-comment-info-name">{getFirstCharacterUser(item.name)}</p>
                                    <p className="name" style={{ fontWeight: 'bold', fontSize: '15px' }}>
                                        {item.name}
                                    </p>
                                </div>
                                <div className="cmt_wrap">
                                    <p>
                                        <strong>Đánh giá:</strong>
                                        <Rate
                                            style={{ color: 'orange', fontSize: '14px' }}
                                            value={item.star}
                                            disabled={true}
                                        />
                                    </p>
                                    <p>
                                        <strong>Nhận xét:</strong>
                                        <span className="cmt">{item.comment}</span>
                                    </p>
                                </div>
                                <Divider></Divider>
                            </div>
                        </Col>
                    ))}
                </div>
            </Row>
        </div>
    )
}

export default RateStar
