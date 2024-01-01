import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import '../components/welcome/style-welcome.css'

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function ExistingProfileCard(props: any) {
  //   const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', margin:'16px'}}>
      <div className='upper-part'>
        <CardMedia component='img' sx={{ height: 'auto', minHeight: '120px', minWidth: '80px', width: 'auto', maxHeight: '140px', maxWidth: '112px' }} image='somesh.png' alt='Paella dish' />
        <CardContent sx={{ height: '100%', width: '100%', }}>
          <Typography variant='body2' color='text.secondary' sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className='profile-info'>
              <div className='user'>
                <div className='name'>Somesh Paliwal</div>
              </div>
              {props?.profileData?.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) =>
              (
                <div className='specification'>{item}</div>
              )
              )}
              <div className='share-n-edit'>
                <span className='share-n-edit-icon'>share</span>
                <span className='share-n-edit-icon'>edit</span>
              </div>
            </div>
          </Typography>
        </CardContent>
      </div>
      {/* <div className='lower-part'>
        <div className='profile-matches'>12 matches</div>
        <div className='button-for-show'>Show Matches</div>
      </div> */}
    </Card>
  )
}
