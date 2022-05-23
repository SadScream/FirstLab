import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    return (
        <header class="header">
            <nav>
                <ul>
                    <li><a href="/brief">Brief</a></li>
                    <li><a href="/appearance">Appearance</a></li>
                    <li><a href="/personality">Personality</a></li>
                    <li><a href="/links">Links</a></li>
                </ul>
            </nav>
        </header>
    )
  }
}
