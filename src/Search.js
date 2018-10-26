import React from 'react'
import { Link } from 'react-router-dom'

class Search extends React.Component {
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link
						to='/'
						className="close-search"
					>Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author"/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.props.books.map((book) => (
							<li key={book.id} className="book">
								<div className="book-top">
									<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
									<div className="book-shelf-changer">
										<select>
											<option value="move" disabled>Move to...</option>
											<option value="currentlyReading">Currently Reading</option>
											<option value="wantToRead">Want to Read</option>
											<option value="read">Read</option>
											<option value="none">None</option>
										</select>
									</div>
								</div>
								<div className="book-title">To Kill a Mockingbird</div>
								<div className="book-authors">Harper Lee</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
