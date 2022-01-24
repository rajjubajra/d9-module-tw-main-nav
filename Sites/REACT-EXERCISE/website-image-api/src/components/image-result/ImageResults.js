import React, { Component } from 'react';
import propTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';

import {IconButton} from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';


const StockImage = styled.img`
   width: 100%;
   height: auto;
   padding: 5px;
   background-color: #fff;
`;


class ImageResults extends Component{
    render(){
        let imageListContent;
        const {images} = this.props;

        if(images){
          imageListContent = (
                <GridList cellHeight={160}  cols={3}>
                  {images.map(img => (
                    <div
                      title={img.tags}
                      key={img.id}
                      subtitle={
                        <span>
                        by <strong>{img.user}</strong>
                        </span>
                      }
                      actionIcon={
                        <IconButton>
                          <ZoomIn color="white" />
                        </IconButton>
                      }
                      >
                      <StockImage src={img.largeImageURL} alt="" />
                    </div>
                  ))}
                </GridList>
              )
        }else {
          imageListContent = null;
        }

        return(
          <div>
          {imageListContent}
          </div>
        );
    }
}

ImageResults.propTypes = {
  images: propTypes.array.isRequired
}


export default ImageResults;
