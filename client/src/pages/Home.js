const { default: MentorTable } = require('../components/MentorTable');


function Home({ name }) {

    return (
        <div>
            <h2>
                Welcome {name}
            </h2>
            <p>
                <MentorTable></MentorTable>
            </p>
            <div>

            </div>
        </div>
    );
}

Home.defaultProps = {
    name: 'Denzale'

};
export default Home;

