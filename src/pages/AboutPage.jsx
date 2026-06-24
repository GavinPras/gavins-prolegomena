import { Link } from "react-router-dom";
import Masthead from "../components/Masthead.jsx";

export default function AboutPage() {
  return (
    <div className="sheet sheet--essay">
      <Masthead small />

      <main>
        <article className="essay">
          <h1 className="essay-heading">About Gavin&apos;s Prolegomena</h1>

          <p>
            Gavin&apos;s Prolegomena is my personal archive of writings, organized
            into three sections: Interpretations, Ideas, and Reflections.
          </p>
          <p>
            Interpretations contains literary and cultural analyses—primarily of
            anime, manga, and other works of fiction—accompanied by philosophical
            discussion; Ideas consists of original arguments, concepts, and
            philosophical explorations on various topics; Reflections presents
            personal experiences and observations interpreted through a
            philosophical lens.
          </p>
          <p>
            The title <em>Prolegomena</em> comes from the Greek word{" "}
            <em>prolegomenon</em>, meaning &ldquo;things said beforehand&rdquo; or
            &ldquo;preliminary remarks.&rdquo; I first encountered the term while
            reading the work of Immanuel Kant. It seemed an appropriate name for a
            collection of writings that serves as an introduction to the
            questions, ideas, and reflections that occupy my thinking.
          </p>
          <p>In the end, this archive is dedicated to those who genuinely wish to read.</p>
        </article>

        <article className="essay">
          <h1 className="essay-heading">About Me</h1>

          <p>Hello everyone, my name is Gavin, and I am a philosophy student.</p>
          <p>My love for philosophy began with programming. Yes—programming.</p>
          <p>
            Since high school, I spent countless hours learning programming
            languages, attending coding webinars, and solving programming
            challenges on Codewars. As I continued this routine, I felt that the
            more I learned about programming, the greater my intellectual
            capacity became.
          </p>
          <p>
            My reason for learning programming was simple: I wanted to build my
            own website. Because the goal was simple, the process was
            straightforward as well. Over time, my web development skills
            improved significantly, and eventually, I succeeded in creating my
            own website. I primarily focused on front-end development, although I
            was also capable of working with back-end technologies. I simply
            enjoyed designing interfaces more than handling data and server-side
            logic.
          </p>
          <p>
            Programming was enjoyable at first. However, once I had achieved my
            goal, I found myself at a dead end. I was no longer as interested in
            programming as I once had been. I began asking a different kind of
            question: Does knowing more necessarily mean being able to solve
            more?
          </p>
          <p>That question marked the beginning of my journey into philosophy.</p>
          <p>
            I was first introduced to Stoicism—a philosophical tradition that
            encourages us to accept what lies beyond our control and focus on our
            inner selves. Yet, it seemed insufficient for understanding a world
            filled with social complexities and external influences. After all,
            we are not shaped solely by what is within us; we are also formed by
            the concepts, structures, and conditions that surround us.
          </p>
          <p>
            From there, I explored Epicureanism, Nihilism, Absurdism, and
            eventually Existentialism. In other words, my introduction to
            philosophy began through its various schools of thought.
          </p>
          <p>
            Among them, Existentialism resonated with me the most. I encountered
            the works of Søren Kierkegaard and Jean-Paul Sartre—two thinkers from
            very different backgrounds who nevertheless shared a similar concern
            for the value and condition of human existence. One existentialist
            idea, in particular, left a lasting impression on me:{" "}
            <em>existence precedes essence</em>.
          </p>
          <p>
            Ultimately, philosophy gave me a space to keep asking questions
            without being silenced by authority. It allows us to see the world
            with the curiosity of a child while approaching it with the
            intellectual maturity of an adult.
          </p>
          <p>And what about programming?</p>
          <p>
            I still continue doing it. In fact, this website itself is proof of
            that. The difference is that I am no longer as active as I once was,
            because my orientation has changed.
          </p>
          <p>
            As Sartre famously wrote, <em>&ldquo;Man is nothing else but what he makes of himself&rdquo;</em>. My
            decision to focus on philosophy is also my decision to embrace my own
            existential condition. As beings who are always in the process of
            becoming, we are nothing more than the sum of our choices and our
            willingness to accept their consequences. If those consequences
            emerge in the future, I am prepared to face them.
          </p>

          <h2></h2>
          <ul className="link-list">
            Check out my:
            <li>
              <a href="https://medium.com/@gavinprakasagps" target="_blank" rel="noopener noreferrer">
                Medium
              </a>{" "}
              ||{" "}
              <a href="https://www.instagram.com/gavinnp__/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </article>
      </main>

      <footer className="colophon">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
      </footer>
    </div>
  );
}
