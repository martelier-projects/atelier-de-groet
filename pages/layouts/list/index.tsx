import { useState } from 'react'

import DefaultTemplate from '../../../templates/Default'

import styles from './styles.module.scss'

export default function List() {
  const [useHighlighted, setUseHighlighted] = useState('none')

  const handleChange = (event: any) => {
    setUseHighlighted(event.target.id)
  }

  return (
    <DefaultTemplate
      title="Holy grail"
      intro="Some more info about the holy grail"
    >
      <>
        <form onChange={handleChange}>
          <input
            type="radio"
            name="highlight"
            id="none"
            defaultChecked={true}
          />
          <label htmlFor="none">none</label>

          <input type="radio" name="highlight" id="row" />
          <label htmlFor="row">row</label>

          <input type="radio" name="highlight" id="column" />
          <label htmlFor="column">column</label>

          <input type="radio" name="highlight" id="both" />
          <label htmlFor="both">both</label>
        </form>

        <ul className={styles['list']}>
          <li className={styles['list-item']} data-highlighted={useHighlighted}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']} data-highlighted={useHighlighted}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']} data-highlighted={useHighlighted}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
          <li className={styles['list-item']}>
            <h2>A list item</h2>
            <p>Some more info about this list item.</p>
          </li>
        </ul>
      </>
    </DefaultTemplate>
  )
}
