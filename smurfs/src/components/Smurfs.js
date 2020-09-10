import React from "react";
import { connect } from "react-redux";
import SmurfInfo from './SmurfInfo';

function Smurfs(props) {
  return (
    <>
      <h3>List of Smurfs</h3>
      {props.smurfs.map(smurf => {
        console.log('smurf data', smurf);
        return <SmurfInfo key={smurf.id} smurf={smurf} />
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

export default connect(mapStateToProps, {})(Smurfs);
