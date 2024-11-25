"use client"
import { useEffect } from 'react'
import * as THREE from 'three'
import CLOUDS from 'vanta/src/vanta.clouds'
import Framework from './Framework'
import Other from './Other'
import Skill from './Skill'

const Main = () => {
    useEffect(() => {
        CLOUDS({
            el: '#vanta',
            backgroundColor: 0xffffff,
            skyColor: 0xa0deff,
            cloudColor: 0xdfdfe1,
            cloudShadowColor: 0x5b6d84,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 230.00,
            minWidth: 230.00,
            speed: 1.5,
            THREE: THREE
        })
    }, [])
    return (

        <>
            <div className='bg p-7 font-sans' id="vanta" style={{ width: '100%', height: '100%' }}>
                <section id="About me" className='mt-3 mb-4'>
                    <h2 className='mb-2 text-3xl font-semibold'>About me</h2>
                    <div className='px-2'>
                        <p className='p-2 text-xl font-semibold'>髙田 晃希</p>
                        <p className='px-4 mb-5'>私は現在，データ解析に関する研究やプログラミング教室での指導，業務改善アプリやソーシャルプラットフォームの開発を行っています.</p>
                        <p className='p-2 text-xl font-semibold'>主な専門領域</p>
                        <p className='px-4 mb-5'>機械学習・深層学習，フロントエンド・バックエンド</p>
                        <p className='p-2 text-xl font-semibold'>興味のある分野</p>
                        <p className='px-4'>ロジスティクス，物流，人工知能，データサイエンス，ソフトウェア</p>
                    </div>
                </section>
            </div>
            <main className='p-7 font-sans bg-slate-50'>
                <br></br>
                <br></br>
                <br></br>
                <section id="Skill">
                    <h2 className='mb-2 text-3xl font-semibold'>Skill</h2>
                    <Skill></Skill>
                    <Framework></Framework>
                    <Other></Other>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <section id="Research">
                    <h2 className='mb-2 text-3xl font-semibold'>Research</h2>
                    <div className='p-2'>
                        <div className='bg-white p-4 mb-4 border border-slate-300 rounded-lg shadow-md'>
                            <a href='/paper1.pdf' className='underline'>シビックプライド醸成に繋がる住民価値の掘り起こしと貢献度の検証に関する研究</a>
                            <p className='text-xs text-gray-500'>髙田　晃希，黒羽　晟，山本　裕（東京国際工科専門職大），橋本沙也加，橋本尚子，岡田ゆかり（百代）</p>

                            <a href='/230214発表資料最終版.pdf' className='underline'>発表スライド</a>
                            <p></p>
                            <a href='/paper4.pdf' className='underline'>紀要論文</a>
                        </div>
                        <div className='bg-white p-4 mb-4 border border-slate-300 rounded-lg shadow-md'>
                            <a href='/paper3.pdf' className='underline'>シビックプライド醸成のための新住民価値の発掘モデルの検証と住民価値向上のための自治体施策の具体化に関する研究</a>
                            <p className='text-xs text-gray-500'>山本 裕（東京国際工科専門職大学）・橋本 沙也加・橋本 尚子・岡田 ゆかり（百代）・河野 敏也・髙田 晃希・黒羽 晟（東京国際工科専門職大学）</p>

                            <a href='/230907発表資料.pdf' className='underline'>発表スライド</a>
                        </div>
                        <div className='bg-white p-4 border border-slate-300 rounded-lg shadow-md'>
                            <a href='/paper2.pdf' className='underline'>CO2 センサーを利用した教室状態解析システムの開発</a>
                            <p className='text-xs text-gray-500'>黒羽　晟，髙田　晃希，栗原　諒，爰川 知宏</p>
                        </div>
                    </div>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <section id="Learning Posts">
                    <h2 className='mb-2 text-3xl font-semibold'>Learning Posts</h2>
                    <div className='p-2'>
                        <a href='https://qiita.com/Koki_Takada' className='underline'>Qiitaの投稿記事</a>
                    </div>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <section id="Project">
                    <h2 className='mb-2 text-3xl font-semibold'>Project</h2>
                    <div className='p-2'>
                        <p className='text-xl font-semibold'>学生のためのソーシャルプラットフォーム</p>
                        <a href='https://github.com/IPUT-Kernel' className='underline px-4'>GitHub公式ページ</a>
                    </div>
                </section>
            </main>
        </>
    )
}


export default Main;
