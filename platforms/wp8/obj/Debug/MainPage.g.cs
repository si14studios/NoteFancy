<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
﻿#pragma checksum "C:\Users\Peter\Documents\GitHub\NoteFancy\platforms\wp8\MainPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "A0D6A2738F5983261BFA39BFC5E69C6F"
=======
﻿#pragma checksum "D:\Program Files (x86)\Github Repositories\NoteFancy\platforms\wp8\MainPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "A0D6A2738F5983261BFA39BFC5E69C6F"
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34014
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Microsoft.Phone.Controls;
using System;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Resources;
using System.Windows.Shapes;
using System.Windows.Threading;
using WPCordovaClassLib;


namespace com.si14studios.notefancy {
    
    
    public partial class MainPage : Microsoft.Phone.Controls.PhoneApplicationPage {
        
        internal System.Windows.Controls.Grid LayoutRoot;
        
        internal WPCordovaClassLib.CordovaView CordovaView;
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Windows.Application.LoadComponent(this, new System.Uri("/com.si14studios.notefancy;component/MainPage.xaml", System.UriKind.Relative));
            this.LayoutRoot = ((System.Windows.Controls.Grid)(this.FindName("LayoutRoot")));
            this.CordovaView = ((WPCordovaClassLib.CordovaView)(this.FindName("CordovaView")));
        }
    }
}

