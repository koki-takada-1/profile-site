import Hamburger from './components/Hamburger'

export default function Home() {
  return (
    <>
      <Hamburger></Hamburger>
      <main className='p-7 font-sans'>
        <section id="Top">
          <h2 className='mb-2 text-3xl font-semibold'>About me</h2>
          <div className='px-2'>
            <p className='p-2 text-xl font-semibold'>髙田 晃希</p>
            <p className='px-4'>私は現在，データ解析に関する研究やプログラミング教室での指導，業務改善アプリやソーシャルプラットフォームの開発を行っています．</p>
            <p className='p-2 text-xl font-semibold'>興味のある分野</p>
            <p className='px-4'>人工知能，データサイエンス，ソフトウェア</p>
            <p className='p-2 text-xl font-semibold'>スキル</p>
            <ul className='px-4'>
              <li>言語：<span className='text-sm'>C/C++, Python, Java, JavaScript</span></li>
              <li>Pythonフレームワーク：<span className='text-sm'>Tensorflow, Pytorch, FastAPI, streamlit, Django</span></li>
              <li>Javaフレームワーク：<span className='text-sm'>Spring Framework</span></li>
              <li>JavaScriptフレームワーク：<span className='text-sm'>Next.js</span></li>
              <li>その他：<span className='text-sm'>MySQL, MongoDB, Git/GitHub, LaTex, HTML/CSS</span></li>
            </ul>
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section id="Research">
          <h2 className='mb-2 text-3xl font-semibold'>Research</h2>
          <div className='p-2'>
            <div className='px-4 mb-2'>
              <a href='/paper1.pdf' className='underline'>シビックプライド醸成に繋がる住民価値の掘り起こしと貢献度の検証に関する研究</a>
              <p className='text-xs text-gray-500'>髙田　晃希，黒羽　晟，山本　裕（東京国際工科専門職大），橋本沙也加，橋本尚子，岡田ゆかり（百代）</p>
            </div>
            <div className='px-4'>
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
