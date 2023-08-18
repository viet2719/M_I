import React from 'react'
import styles from '../styles/Home.module.scss'

interface Option {
	id: string
	label: string
}

interface DropdownProps {
	options: Option[]
}

const Dropdown: React.FC<DropdownProps> = () => {
	const options = [
		{ id: '1', label: 'Địa điểm' },
		{ id: '2', label: 'Mức lương' },
		{ id: '3', label: 'Kinh nghiệm' },
		{ id: '4', label: 'Ngành nghề' },
	]
	return (
		<div className={styles.selectContainer}>
			<div className={styles.dropdown}>
				<div className={styles.selectSearch}>
					<input
						className={styles.selectSearchField}
						type="search"
						tabIndex={0}
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						spellCheck="false"
						role="textbox"
					/>
				</div>
				<div className={styles.selectResults}>
					<ul className={styles.selectOptions} role="tree">
						{options?.map((option) => (
							<li
								key={option.id}
								className={styles.selectOption}
								role="treeitem"
								aria-selected="false"
							>
								{option.label}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Dropdown
