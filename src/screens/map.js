import React from 'react'
import './education.scss';
import './education.css';
import { BsSearch } from 'react-icons/bs'

class Map extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            locations: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('https://developers.onemap.sg/privateapi/themesvc/retrieveTheme?queryName=ewaste&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjg5OTEsInVzZXJfaWQiOjg5OTEsImVtYWlsIjoiY2xlbWVudGZvb29vQGdtYWlsLmNvbSIsImZvcmV2ZXIiOmZhbHNlLCJpc3MiOiJodHRwOlwvXC9vbTIuZGZlLm9uZW1hcC5zZ1wvYXBpXC92MlwvdXNlclwvc2Vzc2lvbiIsImlhdCI6MTY1NzM1MTAxMiwiZXhwIjoxNjU3NzgzMDEyLCJuYmYiOjE2NTczNTEwMTIsImp0aSI6ImY0YTZiYjZkYzRjYmEwNmQyZTIzOGFmYzlhNWI0YzZiIn0.dgitF34C5b2JmXeHRlvuFdaOJVYeYGQWyDea3XGu-NU')
            .then(response => response.json())
            .then(json => {
                const srchResults = json["SrchResults"];
                delete srchResults[0];
                this.setState({
                    locations: srchResults,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, locations } = this.state;

        if (!isLoaded) {
            return (<div className='container'>
                <h1>Loading...</h1>
            </div>
            );
        } else {

            // locations.map((location) =>
            //     <div className="card" key={1}>
            //         <div className="card_header">
            //             <h2>{location.NAME}</h2>
            //             <p>{location.DESCRIPTION}</p>
            //             <p className="Address">{location.ADDRESSBUILDINGNAME}</p>
            //             <p className="Postal Code">{location.ADDRESSPOSTALCODE}</p>
            //         </div>
            //     </div>
            // );

            return (
                // <div className='container'>
                //     <form style={{
                //         display: "flex",
                //         flexDirection: "column",
                //         // backgroundColor: "white",
                //         justifyContent: "center",
                //         alignItems: "center"
                //     }}>
                //         <label style={
                //             {
                //                 // backgroundColor: "pink",
                //                 display: "flex",
                //                 flexDirection: "row",
                //                 // backgroundColor: "white",
                //                 justifyContent: "center",
                //                 alignItems: "center"
                //             }
                //         }>
                //             <input type="text" name="name" placeholder="search" class="search_bar" />
                //             <BsSearch className='search_button' size={30} />
                //         </label>

                //     </form>

                //     <div className="main_content">

                //         {locations}
                //     </div>

                // </div>




                <div className="container">
                    <iframe src="https://www.onemap.gov.sg/amm/amm.html?mapStyle=Night&zoomLevel=19&marker=latLng:1.27414893629254,103.801399416665!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRUFMRVhBTkRSQSUyMFJFVEFJTCUyMENFTlRSRSUzQyUyRnN0cm9uZyUzRSUzQyUyRnAlM0U=!colour:red&marker=latLng:1.28225513828498,103.852615142196!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRU9ORSUyME1BUklOQSUzQyUyRnN0cm9uZyUzRSUzQyUyRnAlM0U=!colour:red&marker=latLng:1.33945271661445,103.70668501289!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRSUyMEpVUk9ORyUyMFBPSU5UJTNDJTJGc3Ryb25nJTNFJTNDJTJGcCUzRQ==!colour:red&marker=latLng:1.39572457045088,103.892640159741!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRVNFTkdLQU5HJTIwR0VORVJBTCUyMEhPU1BJVEFMJTNDJTJGc3Ryb25nJTNFJTNDJTJGcCUzRQ==!colour:red&marker=latLng:1.30863562772071,103.786331973494!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRTIzJTIwR0hJTSUyME1PSCUyMExJTkslM0MlMkZzdHJvbmclM0UlM0MlMkZwJTNF!colour:red&marker=latLng:1.37178045438826,103.849569974207!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRUNIRU5HJTIwU0FOJTIwQ09NTVVOSVRZJTIwQ0VOVFJFJTNDJTJGc3Ryb25nJTNFJTNDJTJGcCUzRQ==!colour:red&marker=latLng:1.31142103107683,103.856624019991!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRSUyMENJVFklMjBTUVVBUkUlMjBNQUxMJTNDJTJGc3Ryb25nJTNFJTNDJTJGcCUzRQ==!colour:red&marker=latLng:1.30197836876806,103.839759023144!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRUhBUlZFWSUyME5PUk1BTiUyMCU0MCUyMFRIRSUyMENFTlRSRVBPSU5UJTNDJTJGc3Ryb25nJTNFJTNDJTJGcCUzRQ==!colour:red&marker=latLng:1.37062493513786,103.848045714146!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRUNBU0glMjBDT05WRVJURVJTJTIwJTQwJTIwNzEwQSUyMEFORyUyME1PJTIwS0lPJTIwQVZFJTIwOCUzQyUyRnN0cm9uZyUzRSUzQyUyRnAlM0U=!colour:red&marker=latLng:1.31883225284458,103.808061967625!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRUZBUlJFUiUyMEdBUkRFTlMlMjBSQyUzQyUyRnN0cm9uZyUzRSUzQyUyRnAlM0U=!colour:red&marker=latLng:1.27672492702287,103.845155395387!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRSUyMEdVT0NPJTIwVE9XRVIlM0MlMkZzdHJvbmclM0UlM0MlMkZwJTNF!colour:red&marker=latLng:1.38148413412097,103.744533459829!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRTIyMyUyMENIT0ElMjBDSFUlMjBLQU5HJTIwQ0VOVFJBTCUzQyUyRnN0cm9uZyUzRSUzQyUyRnAlM0U=!colour:red&marker=latLng:1.31881487007651,103.892580778514!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRSUyMFBBWUElMjBMRUJBUiUyMFNRVUFSRSUzQyUyRnN0cm9uZyUzRSUzQyUyRnAlM0U=!colour:red&marker=latLng:1.29303600932874,103.827069067058!iwt:JTNDcCUzRSUzQ3N0cm9uZyUzRSUyMEZBSVJQUklDRSUyMCU0MCUyMFZBTExFWSUyMFBPSU5UJTNDJTJGc3Ryb25nJTNFJTNDJTJGcCUzRQ==!colour:red&marker=latLng:1.33487526118006,103.746894773008!iwt:JTNDcCUzRUlNTSUzQyUyRnAlM0U=!colour:red&popupWidth=200" height="450" width="800" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe><ul>
                        {locations.map(locations => (
                            <li key={locations.id}>
                                Name: {locations.NAME} | Address: {locations.ADDRESSBUILDINGNAME} | Postal Code: {locations.ADDRESSPOSTALCODE}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

    }

}

export default Map;