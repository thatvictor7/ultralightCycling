import React from 'react'
import './hexGrid.css'

export default function HexGrid() {
    return (
        <div className='hex-container'>
            {/* <div class="main">
                <div class="container">
                    <div className='single-hex'>
                        <span>AMBASSADOR</span>
                        <span>AMBASSADOR</span>
                    </div>
                    <div>AMBASSADOR</div>
                    <div>AMBASSADOR</div>
                    <div>AMBASSADOR</div>
                    <div>AMBASSADOR</div>
                </div>
            </div> */}

            <div className='main'>
                <div className='container'>
                    <a href="#" class="clip-each clip-gradient biker">
                        <div class="clip-caption">
                            <span>AMBASSADOR</span>
                            <span className='button-container'>
                                <div className='button'>LEARN MORE</div>
                            </span>
                        </div>
                    </a>
                    <a href="#" class="clip-each clip-gradient shop">
                        <div class="clip-caption">
                        <span>SHOP</span>
                            <span className='button-container'>
                                <div className='button'>LEARN MORE</div>
                            </span>
                        </div>
                    </a>
                    <a href="#" class="clip-each clip-gradient landscape">
                        <div class="clip-caption">
                        <span>ADVENTURES</span>
                            <span className='button-container'>
                                <div className='button'>LEARN MORE</div>
                            </span>
                        </div>
                    </a>
                    <a href="#" class="clip-each clip-gradient landscape">
                        <div class="clip-caption">
                        <span>ADVENTURES</span>
                            <span className='button-container'>
                                <div className='button'>LEARN MORE</div>
                            </span>
                        </div>
                    </a>
                    <a href="#" class="clip-each clip-gradient landscape">
                        <div class="clip-caption">
                        <span>ADVENTURES</span>
                            <span className='button-container'>
                                <div className='button'>LEARN MORE</div>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}