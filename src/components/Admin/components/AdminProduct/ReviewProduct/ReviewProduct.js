import React, { useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import config from '../../../../../config'

import { useDispatch, useSelector } from 'react-redux'
import { BlogProduct, getproductById } from '../../../../../redux/actions/ProductAction'

import './ReviewProduct.css'

export default function ReviewProduct() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const editorRef = useRef(null)
    const redict = useNavigate()

    const detailProduct = useSelector((state) => state.getProductById.product)

    const log = async () => {
        if (editorRef.current) {
            const blogContent = String(editorRef.current.getContent())
            await dispatch(
                BlogProduct(id, { blogContent }, () => {
                    alert('Thêm tổng quan sản phẩm thành công')
                }),
            )
            redict(`${config.routes.product}`)
        }
    }

    useEffect(() => {
        dispatch(getproductById(id))
    }, [dispatch, id])

    return (
        <section id="review">
            <div className="review">
                <div className="review-header">
                    <span className="review-title">Tổng quan sản phẩm</span>
                    <Link to={config.routes.product}>Trở về</Link>
                </div>
                <div className="review-content">
                    {detailProduct ? (
                        <Editor
                            apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
                            language="vi"
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            initialValue={detailProduct.blog}
                            init={{
                                height: 500,
                                menubar: 'file edit view insert format tools table tc help',
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount',
                                ],
                                toolbar:
                                    'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            }}
                        />
                    ) : (
                        ''
                    )}
                    <button onClick={log}>Thêm</button>
                </div>
            </div>
        </section>
    )
}
