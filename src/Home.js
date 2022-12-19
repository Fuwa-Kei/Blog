import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    // call the custom hook, call data 'blogs' 
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* error message */}
            {error && <div>{error}</div>}

            {/* loading message */}
            {isPending && <div>Loading....</div>}

            {/* check the data as been added to the blogs array - logical && evaluates left side first so if data not added yet valule of 'blogs' = null therefore false and will not move on till next part till its true*/}
            
            {blogs && <BlogList blogs={blogs} title="All blog posts" />}
        </div>
    );
}
 
export default Home;