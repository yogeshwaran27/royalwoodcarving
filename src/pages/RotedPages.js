import React,{useState,useEffect} from 'react'
import {getImages,getTags,getImagesWithTag} from "../api";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useWindowSize from '../components/windowHook';
import Select from 'react-select';
import CircularProgress from '@mui/material/CircularProgress';
import Button from "@mui/material/Button";
const useStyles = {
    button: {
        backgroundColor:"#d95e47",
        margin:"1vh",
        color:"white",
        border:"0px",
      '&:hover': {
        backgroundColor: '#fff',
        color: '#d95e47',
    },
  }}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const BedPage = (props) => {
    const size = useWindowSize();
    const [imagesloading,setImagesLoading]=useState(true);
    const [images,setImages]=useState([])
    const [loadFailed,setLoadFailed]=useState(false)
    const [nextCursor,setNextCursor]=useState(null)
    const [searchSelect,setSearchSelect]=useState({selectedOption:null})
    const handleChange=(selectedOption)=>{
        setSearchSelect({selectedOption});
    }
    const [selectOptions,setSelectOption] = useState([]);
    const [optionLoading,setOptionLoading]=useState(true);
    useEffect(() => {
        const fetchData=async()=>{
            if(searchSelect.selectedOption===null){
                const responseData=await getImages(props.prefix);
                if(responseData.error){
                    setLoadFailed(true)  
                }else{
                setNextCursor(responseData.next_cursor)
                setImages(responseData.resources)
                }
                setImagesLoading(false)    
            }else{
                const responseData=await getImagesWithTag(props.prefix,searchSelect.selectedOption.value);
                if(responseData.error){
                    setLoadFailed(true)  
                }else{
                    setNextCursor(responseData.next_cursor)
                    setImages(responseData.resources)
                }
                setImagesLoading(false)
            }
           
        }
        const fetchTags=async()=>{
            const response=await getTags(props.prefix);
            if(response.error){
                setLoadFailed(true)  
            }else{
            setSelectOption(response)
            }
            setOptionLoading(false)
        }
        fetchTags();
        fetchData();
    },[searchSelect,props.prefix])
    const reloadPage=()=> {
        window.location.reload(false);
      }
    const nextPageHandler=async ()=>{
        window.scrollTo(0, 0)
        const responseJSON=await getImages(props.prefix,nextCursor);
        if(responseJSON.error){
            setLoadFailed(true)      
        }else{
            setImages(responseJSON.resources)
            setNextCursor(responseJSON.next_cursor)
        }
    }
    const goTOFirstPage=async ()=>{
        window.scrollTo(0, 0)
        setNextCursor(null);
        const responseData=await getImages(props.prefix);
        if(responseData.error){
            setLoadFailed(true)  
        }else{
        setNextCursor(responseData.next_cursor)
        setImages(responseData.resources)
        }
        setImagesLoading(false)
    }
    let imgHeight="300vh"
    let imgWdith="350vh"

    if(size.width<600  ){
        imgWdith=props.widthmobile
        imgHeight=props.heightmobile
    }else  if(size.width>599 && size.width<790 ){
        imgWdith=props.widthsm
        imgHeight=props.heightsm
    }else if(size.width>900 && size.width<1050){
        imgWdith=props.width1
        imgHeight=props.height1
    }else if(size.width>1050 && size.width<1120){
        imgWdith=props.width2
        imgHeight=props.height2
    }else if(size.width>1120  && size.width<1240 ){
        imgWdith=props.width3
        imgHeight=props.height3
    }else if(size.width>1240 && size.width<1780 ){
        imgWdith=props.width4
        imgHeight=props.height4
    }else{
        imgWdith=props.width5
        imgHeight=props.height5
    }
    
    
    let imageGrid=(<div style={{minHeight:"60vh"}}>
        <CircularProgress size={90}/>
        </div>)
    if(!imagesloading && images.length!==0 && !loadFailed){
        imageGrid=(<Grid container spacing={{ xs: 3, md: 3 }} alignItems="center" justifyContent="center">
            {images.map(image=>
            <Grid item  key={image.public_id}>
                <Item>
                <img src={image.url} alt="bed" width={imgWdith} height={imgHeight} />
                </Item>
            </Grid>
            )}
            </Grid>
        )
    }else if(!imagesloading && loadFailed){
        imageGrid=(<div>
            <img src="https://res.cloudinary.com/dehmdybij/image/upload/v1640958449/erroe_messag_ywk2ak.png"  width="280vw" height="280vh"  alt="please try again"/>
            <br/>
            <br/>
            <Button variant="outlined" onClick={reloadPage}>Try Again</Button>
        </div>)
    }else if(!imagesloading && images.length===0){
        imageGrid=(<div>
            <img src="https://res.cloudinary.com/dehmdybij/image/upload/v1640186841/not_found_copy_djxb4x.jpg"  width="350" height="500"  alt="Design Not found"/>
        </div>)
    }
    
    return (
        <div style={{textAlign:"center",alignItems:"center"}}>
            <Select
                value={searchSelect.selectedOption}
                onChange={handleChange}
                options={selectOptions}
                isLoading={optionLoading}
                isClearable={true}
            />
            <br/>
            {imageGrid}
            <br/>
            <br/>
            {!loadFailed && <Button variant="outlined" onClick={goTOFirstPage} style={useStyles.button}>First Page</Button>}
            {nextCursor && !loadFailed && <Button variant="outlined" onClick={nextPageHandler} style={useStyles.button}>Next Page</Button>}
          <br/>
          <br/>

        </div>

    )
}

export default BedPage;