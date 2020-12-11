import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyrees Johnson</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
      <div className="banner">
       <a href="https://tyreesjohnson.com/codenine" target="_blank"> <img src="/392a0b66f76733089e92a53087b88e85.png" alt="" /> </a>
        </div>
        <h1 className={styles.title}>
        <img src="/9HEVzTes_400x400.png" alt="tyrees johnson" className="me"></img>
        </h1>

        <style jsx> {`
         
        .me {
          width:150px;
          border-radius:100px;
          border:solid 3px #000;
        }

         @media(max-width:768px) {
           .me {
             width:50%;
           }

           .mystack {
             justify-content:center;
             text-align:center;
             display:flex;
             flex-direction:column;
           }
         }

          .banner {
            width:100% !important;
            height:60px;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:20px;
            background: linear-gradient(-50deg,#ee5952,#ea3a7e,#20aadb,#0758f0);background-size: 320% 200%;-webkit-animation: 
    Gradient 15s ease infinite;-moz-animation: Gradient 15s ease infinite;animation: 
    Gradient 15s ease infinite;}@-webkit-keyframes 
    Gradient{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}@-moz-keyframes 
    Gradient{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}@keyframes 
    Gradient{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%};
          }


          .banner img {
            width:350px;
          }
          
          `}
        </style>
        
        <p className={styles.description}>
        Hey, I'm, {' '}
          <code className={styles.code}>Tyrees Johnson</code> a web developer.
        </p>

        <div class="mystack">
        <img src="https://img.icons8.com/color/48/000000/html-5.svg"/>
        <img src="https://img.icons8.com/color/48/000000/css3.svg"/>
        <img src="https://img.icons8.com/color/48/000000/javascript.svg"/>
        <img src="https://img.icons8.com/color/48/000000/sass.svg"/>
        <img src="https://img.icons8.com/color/48/000000/vue-js.svg"/>
        <img src="https://img.icons8.com/windows/48/000000/nodejs.svg"/>
        <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.svg"/>
        <img src="https://img.icons8.com/color/48/000000/python.svg"/>
        <img src="https://img.icons8.com/ultraviolet/48/000000/react.svg"/>
        <img src="https://img.icons8.com/color/48/000000/typescript.svg"/>
        <img src="https://img.icons8.com/ios-filled/60/000000/mysql-logo.svg"/>
        <img src="https://img.icons8.com/color/48/000000/mongodb.svg"/>
        <img src="https://img.icons8.com/color/48/000000/ruby-programming-language.svg"/>
        <img src="https://img.icons8.com/color/48/000000/heroku.svg"/>
        <svg width="100" height="64" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/></svg>
        
        </div>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>What im currently working on or have done in the past.</p>
          </a>

          <a href="https://paypal.me/TyreesJohnson" target="_blank" className={styles.card}>
            <h3>Donations &rarr;</h3>
            <p>All donations are collected via PayPal and greatly appreciated.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Backstory &rarr;</h3>
            <p>A little about myself and what led me to this path.</p>
          </a>

          <a
            href="mailto:usa@tyreesjohnson.com"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>
              Twitter, Facebook, Instagram, Snapchat, etc.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Built in{''}
          <img src="/react-js.png" alt="reactjs" width="100"/> & <img src="/nextjs.png" alt="next-js" width="80"/> 
      </footer>
    </div>
  )
}
