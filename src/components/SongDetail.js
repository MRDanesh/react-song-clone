import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({selectedSong}) => {
    
    const renderDetail = () => {
        return (
            <div>
                <h3>Details:</h3>
                <p>
                    title: {selectedSong.title},
                    <br/>
                    Duration: {selectedSong.duration}
                </p>
            </div>
        );
    };

    return (
        <div>
            {selectedSong ? renderDetail() : <div> Select something! </div> }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);