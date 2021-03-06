/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "RCTSplashScreen.h" //import interface

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //[RCTSplashScreen open:rootView];
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"SmartEvents"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  [RCTSplashScreen open:rootView withImageNamed:@"splash"]; // activate splashscreen, imagename from LaunchScreen.xib
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  for (NSString *fontFamilyName in [UIFont familyNames]) {
    for (NSString *fontName in [UIFont fontNamesForFamilyName:fontFamilyName]) {
      NSLog(@"Family: %@    Font: %@", fontFamilyName, fontName);
    }
  }
  return YES;
}

@end
