import React from "react";
import { ContentAdd } from "../../components/ContentAdd";
import { ElementStandard } from "../../components/ElementStandard";
import { Mop } from "../../components/Mop";
import { NavigationMenu } from "../../components/NavigationMenu";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div">
        <div className="navigation-sidebar">
          <div className="overlap">
            <NavigationMenu className="navigation-menu-px" />
            <div className="default-monochrome">
              <img className="element" alt="Element" src="/img/line-2.png" />
              <div className="overlap-group">
                <img className="element-db-a-ae" alt="Element" src="/img/1d1b1327-9a68-46ae-aa6f-f7be0d7426d3.png" />
                <div className="window-panel">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="label">Dashboard</div>
                      <img className="img" alt="Home" src="/img/home.png" />
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper">Troubleshoot</div>
                      <img className="crisis-alert" alt="Crisis alert" src="/img/crisis-alert.png" />
                    </div>
                  </div>
                  <div className="database">
                    <div className="overlap-group-2">
                      <div className="label-2">Database</div>
                      <img className="img" alt="Database" src="/img/database.png" />
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="overlap-group-2">
                      <div className="label-3">Set Parameters</div>
                      <img className="settings" alt="Settings" src="/img/settings.png" />
                    </div>
                  </div>
                </div>
                <div className="support-desk">
                  <div className="overlap-2">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="label-3">Instructions</div>
                        <img
                          className="fiber-manual-record"
                          alt="Fiber manual record"
                          src="/img/fiber-manual-record.png"
                        />
                      </div>
                    </div>
                    <div className="overlap-wrapper">
                      <div className="overlap-group-2">
                        <div className="label-3">Support Desk</div>
                        <img className="support-agent" alt="Support agent" src="/img/support-agent.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <img className="dfd" alt="Dfd" src="/img/d259f62d-8138-4973-a792-a77219bcd587.png" />
                  <img className="logo-copy" alt="Logo copy" src="/img/logo-copy-3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <img className="grid" alt="Grid" src="/img/grid-1.svg" />
            <img className="grid-2" alt="Grid" src="/img/grid-4.svg" />
            <img className="grid-3" alt="Grid" src="/img/grid-2.svg" />
            <img className="grid-4" alt="Grid" src="/img/grid-4.svg" />
            <img className="grid-5" alt="Grid" src="/img/grid-3.svg" />
            <div className="group-wrapper">
              <div className="group-2">
                <div className="group-3">
                  <div className="div-2">
                    <div className="overlap-group-3">
                      <div className="div-2">
                        <ElementStandard className="FAB-standard" icon={<ContentAdd />} />
                      </div>
                      <Mop className="mop-instance" />
                    </div>
                  </div>
                  <div className="overlap-5">
                    <div className="div-2">
                      <div className="FAB-standard-wrapper">
                        <ElementStandard className="one-standard" icon={<ContentAdd />} />
                      </div>
                    </div>
                    <img className="img-2" alt="Fast rewind" src="/img/fast-rewind.png" />
                  </div>
                  <div className="overlap-6">
                    <div className="div-2">
                      <div className="FAB-standard-wrapper">
                        <ElementStandard className="one-standard" icon={<ContentAdd />} />
                      </div>
                    </div>
                    <img className="img-2" alt="Stop" src="/img/stop.png" />
                  </div>
                  <div className="overlap-7">
                    <div className="div-2">
                      <div className="FAB-standard-wrapper">
                        <ElementStandard className="one-standard" icon={<ContentAdd />} />
                      </div>
                    </div>
                    <img className="img-2" alt="Fast forward" src="/img/fast-forward.png" />
                  </div>
                  <div className="overlap-8">
                    <div className="div-2">
                      <div className="FAB-standard-wrapper">
                        <ElementStandard className="one-standard" icon={<ContentAdd />} />
                      </div>
                    </div>
                    <img className="img-2" alt="Device reset" src="/img/device-reset.png" />
                  </div>
                  <div className="overlap-9">
                    <div className="div-2">
                      <div className="FAB-standard-wrapper">
                        <ElementStandard className="one-standard" icon={<ContentAdd />} />
                      </div>
                    </div>
                    <img className="img-2" alt="Speed" src="/img/speed.png" />
                  </div>
                </div>
                <div className="div-2">
                  <div className="div-2">
                    <div className="FAB-standard-wrapper">
                      <ElementStandard className="one-standard" icon={<ContentAdd />} />
                    </div>
                  </div>
                  <img className="apps" alt="Apps" src="/img/apps.png" />
                </div>
              </div>
            </div>
            <div className="upper-right-side">
              <div className="frame">
                <div className="text-wrapper-2">Search</div>
                <img className="search" alt="Search" src="/img/search.png" />
              </div>
              <img className="img-3" alt="Medium risk" src="/img/medium-risk.png" />
              <img className="img-3" alt="Account circle" src="/img/account-circle.png" />
            </div>
          </div>
          <div className="zoom-buttons">
            <div className="zoom-wrapper">
              <div className="zoom">
                <div className="overlap-10">
                  <div className="overlap-group-4">
                    <div className="group-4" />
                    <img className="zoom-out" alt="Zoom out" src="/img/zoom-out-1.png" />
                    <img className="zoom-in" alt="Zoom in" src="/img/zoom-in-1.png" />
                    <img className="line" alt="Line" src="/img/line-2-1.svg" />
                    <img className="line-2" alt="Line" src="/img/line-2-1.svg" />
                  </div>
                  <img className="magnification-large" alt="Magnification large" src="/img/magnification-large-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zoom-2">
          <div className="group-5">
            <div className="zoom-3">
              <div className="group-6" />
              <img className="zoom-out-2" alt="Zoom out" src="/img/line-2.png" />
              <img className="zoom-in-2" alt="Zoom in" src="/img/line-2.png" />
              <img className="magnification-large-2" alt="Magnification large" src="/img/line-2.png" />
              <img className="line-3" alt="Line" src="/img/line-2.png" />
              <img className="line-4" alt="Line" src="/img/line-2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
