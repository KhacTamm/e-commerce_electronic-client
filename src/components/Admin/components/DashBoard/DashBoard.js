import React from 'react'
import {
    ShoppingCartOutlined,
    ShoppingOutlined,
    DollarCircleOutlined,
    FileTextOutlined,
} from '@ant-design/icons'
import './DashBoard.css'
import ChartDashBoard from './ChartDashBoard'

export default function DashBoard() {


    return (
        <section id="dashboard">
            <div className="dashboard">
                <div className="dashboard-middle">
                    <div className="dashboard-middle-statistic">
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <ShoppingOutlined></ShoppingOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">1666</span>
                                    <span className="title">Total Sales</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <ShoppingCartOutlined></ShoppingCartOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">25</span>
                                    <span className="title">Daily Visits</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <DollarCircleOutlined></DollarCircleOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">2000</span>
                                    <span className="title">Total Income</span>
                                </div>
                            </li>
                        </div>
                        <div className="dashboard-middle-statistic-content">
                            <li>
                                <div className="dashboard-middle-statistic-icon">
                                    <FileTextOutlined></FileTextOutlined>
                                </div>
                                <div className="dashboard-middle-statistic-title">
                                    <span className="total">1208</span>
                                    <span className="title">Total Orders</span>
                                </div>
                            </li>
                        </div>
                    </div>
                    <ChartDashBoard></ChartDashBoard>
                </div>

                <div className="dashboard-new">
                    <div className="dashboard"></div>
                    <div className="dashboard"></div>
                </div>
            </div>
        </section>
    )
}
