import { Stack } from "@mui/material"
import { Link } from "react-router-dom";


import { categories } from "../utils/constants"

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'},
        }}
    >
        {categories.map((category) => (
            <Link to={`/${category.name}`}>
                <button
                    className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#D88769',
                        color: 'white'
                    }}
                    key = {category.name}
                >
                    <span style={{color: category.name === selectedCategory ? 'white' : '#D88769', marginRight:  '15px' }}
                    >{category.icon}</span>
                    <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}
                    >{category.name}</span>
                </button>
            </Link>
        ))}
    </Stack>
)

export default Sidebar