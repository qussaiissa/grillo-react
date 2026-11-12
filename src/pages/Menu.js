
import React, { useState } from 'react';
import Photo from '../components/Photo.js';
import { BREAKFAST, LUNCH, DRINKS, DESSERT } from '../menuData.js';

const menuGroups = [
    { name: 'Breakfast', items: BREAKFAST },
    { name: 'Lunch', items: LUNCH },
    { name: 'Drinks', items: DRINKS },
    { name: 'Dessert', items: DESSERT }
];

function Menu() {
    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');

    const groups = menuGroups.filter(g => category === 'All' || g.name === category).map(g => ({...g,
            items: g.items.filter(i =>
                (i[0] + ' ' + (i.length > 2 ? i[1] : ''))
                    .toLocaleLowerCase()
                    .includes(search.trim().toLocaleLowerCase())
            )
        }))
        .filter(g => g.items.length);

    return (
        <div className="wrap">
            <div className="mhead">
                <Photo name="pic8.jpg" className="menuimg" />
                <h1>Our Menu</h1>
            </div>

            <p className="lead">
                Search menu items or filter by category. Prices are shown as
                provided in the original restaurant menu; please confirm the
                currency and current prices with the restaurant.
            </p>

            <input
                className="search"
                aria-label="Search menu"
                placeholder="Search menu items (Arabic or English)..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <div className="filters">
                {['All', ...menuGroups.map(g => g.name)].map(name => (
                    <button
                        key={name}
                        type="button"
                        className={`filter ${category === name ? 'active' : ''}`}
                        aria-pressed={category === name}
                        onClick={() => setCategory(name)}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {groups.length ? (
                <div className="cats">
                    {groups.map(g => (
                        <section className="cat" key={g.name}>
                            <h2>{g.name}</h2>
                            {g.items.map((item, i) => (
                                <div className="item" key={i}>
                                    <div className="n">
                                        <b dir="auto">{item[0]}</b>

                                        {item.length > 2 && (
                                            <small dir="auto">
                                                {item[1]}
                                            </small>
                                        )}
                                    </div>
                                    <span className="price">
                                        {item[item.length - 1]}
                                    </span>
                                </div>
                            ))}
                        </section>
                    ))}
                </div>
            ) : (
                <p className="empty">
                    No menu items match your search.
                </p>
            )}
        </div>
    );
}

export default Menu;