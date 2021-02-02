export default function Thread(props) {
    const { thread } = props;
    const { Mentor } = thread;
    return (
        <>
            <h2>{thread.createdAt}</h2>
            <ol>
                {Mentor.map(mentor => {
                    return (
                        <li key={mentor.id}>
                            <strong>{mentor.title}</strong> {mentor.body} <sub>from: {mentor.User.email}</sub>
                        </li>
                    );
                })}
            </ol>
        </>
    );

}

