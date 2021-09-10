import React from 'react';
import './SS.css'
import MenuIcon from '@material-ui/icons/Menu';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ReplayIcon from '@material-ui/icons/Replay';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import AppsIcon from '@material-ui/icons/Apps';
import { Divider } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import BrushIcon from '@material-ui/icons/Brush';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function SS() {
    return (
        <div className="ss">
        <div className="header">
            <div className="header__first">
            <div className="header__menu">
           <MenuIcon/>
            </div>
            <div className="header__insert">
            <div className="header__insertIcon">
            <InsertDriveFileIcon/>
            </div>
            <div className="header__insertText">
           KEEP
            </div>
            </div>
            </div>
            <div className="header__sec">
            <div className="header__searchIcon">
                <SearchIcon/>
            </div>
            <div className="header__input">
              <input  type="text" placeholder="Search"/>
            </div>
            </div>
            <div className="header__third">
            <div className="header__thirdFir">
            <div className="header__reply">
            <ReplayIcon/>
            </div>
            <div className="header__view">
            <ViewDayIcon/>
            </div>
            <div className="header__setting">
            <SettingsIcon/>
            </div>
            </div>
            <div className="header__thirdTwo">
            <div className="header__appIcon">
            <AppsIcon/>
            </div>
            <div className="header__div">
               IIT-ROORKEE
            </div>
            </div>
            </div>
        </div>
        {/* <Divider className="divider"/> */}
        <hr />
        <div className="body">
       <div className="body__sidebar">
       <div className="sidebar__fir">
             <div className="sidebar__firIcon">
               <div className="sidebar__firIcon__first">
             <EmojiObjectsIcon />
               </div>
               <div className="sidebar__firIcon__sec">
                 Notes
               </div>
             </div>
             <div className="sidebar__firIcon">
             <div className="sidebar__firIcon__first">
             <NotificationsIcon />
               </div>
               <div className="sidebar__firIcon__sec">
                 Remainders
               </div>
             </div>
             <div className="sidebar__firIcon">
               <div className="sidebar__firIcon__first">
               <EditIcon />
               </div>
               <div className="sidebar__firIcon__sec">
                 Edit labels
               </div>
             </div>
             <div className="sidebar__firIcon">
               <div className="sidebar__firIcon__first">
               <ArchiveIcon />
               </div>
               <div className="sidebar__firIcon__sec">
                 Archive
               </div>
             </div>
             <div className="sidebar__firIcon">
               <div className="sidebar__firIcon__first">
               <DeleteIcon />
               </div>
               <div className="sidebar__firIcon__sec">
                 Bin
               </div>
             </div>
       </div>
       </div>
       <div className="body__boxbar">
         <div className="body__top">
         <div className="body__topinput">
             <input type="text" placeholder="Take a note..." />
       <div className="body__topinput__I">
       <div className="body__topinput__Icon">
          <CheckBoxIcon />
        </div>
        <div className="body__topinput__Icon">
          <BrushIcon />
        </div>
        <div className="body__topinput__Icon">
          <ImageIcon />
        </div>
       </div>
         </div>
         </div>
         <div className="body__down">
             <div className="first__div">
               <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
               <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
               <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
             </div>
             <div className="second__div">
             <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div><div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div><div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
             </div>
             <div className="third__div">
             <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
             <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
             <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
             <div className="first__divFirst">
               <CheckBoxOutlineBlankIcon />
               <div className="first__divFirstcheckbox">
                 abcde
               </div>
               </div>
             </div>
         </div>
       </div>
        </div>
        </div>
    )
}

export default SS;