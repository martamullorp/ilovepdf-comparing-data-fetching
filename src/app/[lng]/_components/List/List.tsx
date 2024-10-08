'use client';

import { Loading, Text, Title } from '@/components/Atoms';
import { Container } from '@/components/Layout';
import { Link } from '@/components/react-components-library/src/index';

interface IProps {
    lng?: string;
    data: any;
    error: any;
}

export default function List(props: IProps) {
    const { lng, data, error } = props;
    // const [data, setData] = useState(null as any);
    // const [error, setError] = useState(false as boolean);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const result = await response.json();
    //         setData(result);
    //     } catch (error) {
    //         setError(true);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <Container display="flex" flexDirection="column" alignItems="center" margin="90px 0 20px 0">
            {error ? (
                <Title text="Error fetching data." />
            ) : data ? (
                <>
                    <Title text="Json Fake-List" />
                    {data.length === 0 ? (
                        <Text
                            dataTestId="list-no-items"
                            fontSize="small"
                            text="No items"
                            margin="xsmall"
                        />
                    ) : (
                        data.map((item: any) => {
                            return (
                                <Container
                                    key={item.id}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                >
                                    <Text
                                        dataTestId="list-item-title"
                                        fontSize="small"
                                        text={item.title}
                                        margin="xsmall"
                                    />
                                    <Link type="secondary" key={item.id} href="/" label="Go to" />
                                </Container>
                            );
                        })
                    )}
                </>
            ) : (
                <Loading />
            )}
        </Container>
    );
}
