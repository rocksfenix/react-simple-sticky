import React from 'react'
import ReactDom from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Sticky from 'react-simple-sticky'

const App = () => {
  return (
    <div>
      <h1>React Simple Sticky</h1>
      <Sticky>
        <h2>An Example</h2>
        <button>Hey!</button>
      </Sticky>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum perspiciatis a, at dicta molestias nostrum rem tenetur autem enim atque praesentium fuga vero earum! Dolorum dicta autem saepe tenetur.</p>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
