/**
 * @ngdoc module
 * @name material.components.panel
 */
angular
    .module('material.components.panel', [
      'material.core'
    ])
    .service('$mdPanel', MdPanelService);


/***************************************************************************************
 *                              PUBLIC DOCUMENTATION                                   *
 ***************************************************************************************/

/**
 * @ngdoc service
 * @name $mdPanel
 * @module material.components.panel
 *
 * @description
 * `$mdPanel` is a robust, low-level service for creating floating panels on
 * the screen. It can be used to implement tooltips, dialogs, pop-ups, etc.
 *
 * @usage
 * <hljs lang="js">
 * (function(angular, undefined) {
 *   ‘use strict’;
 *
 *   angular
 *       .module('demoApp', ['ngMaterial'])
 *       .controller('DemoDialogController', DialogController);
 *
 *   var panelRef;
 *
 *   function showPanel($event) {
 *     var panelPosition = $mdPanelPosition
 *         .absolute()
 *         .top('50%')
 *         .left('50%');
 *
 *     var panelAnimation = $mdPanelAnimation
 *         .targetEvent($event)
 *         .defaultAnimation('md-panel-animate-fly')
 *         .closeTo('.show-button');
 *
 *     var config = {
 *       attachTo: angular.element(document.body),
 *       controller: DialogController,
 *       controllerAs: 'ctrl',
 *       position: panelPosition,
 *       animation: panelAnimation,
 *       targetEvent: $event,
 *       template: 'dialog-template.html',
 *       clickOutsideToClose: true,
 *       escapeToClose: true,
 *       focusOnOpen: true
 *     }
 *     panelRef = $mdPanel.create(config);
 *     panelRef.open()
 *         .finally(function() {
 *           panelRef = undefined;
 *         });
 *   }
 *
 *   function DialogController(MdPanelRef, toppings) {
 *     var toppings;
 *
 *     function closeDialog() {
 *       MdPanelRef.close();
 *     }
 *   }
 * })(angular);
 * </hljs>
 */

/**
 * @ngdoc method
 * @name $mdPanel#create
 * @description
 * Creates a panel with the specified options.
 *
 * @param opt_config {Object=} Specific configuration object that may contain
 * the following properties:
 *
 *   - `template` - `{string=}`: HTML template to show in the dialog. This
 *     **must** be trusted HTML with respect to Angular’s
 *     [$sce service](https://docs.angularjs.org/api/ng/service/$sce).
 *   - `templateUrl` - `{string=}`: The URL that will be used as the content of
 *     the panel.
 *   - `controller` - `{(function|string)=}`: The controller to associate with
 *     the panel. The controller can inject a reference to the returned
 *     panelRef, which allows the panel to be closed, hidden, and shown. Any
 *     fields passed in through locals or resolve will be bound to the
 *     controller.
 *   - `controllerAs` - `{string=}`: An alias to assign the controller to on
 *     the scope.
 *   - `locals` - `{Object=}`: An object containing key/value pairs. The keys
 *     will be used as names of values to inject into the controller. For
 *     example, `locals: {three: 3}` would inject `three` into the controller,
 *     with the value 3.
 *   - `resolve` - `{Object=}`: Similar to locals, except it takes promises as
 *     values. The panel will not open until all of the promises resolve.
 *   - `attachTo` - `{Element=}`: The element to attach the panel to. Defaults
 *     to appending to the root element of the application.
 *
 * TODO(ErinCoughlan): Add the following config options.
 *   - `groupName` - `{string=}`: Name of panel groups. This group name is
 *     used for configuring the number of open panels and identifying specific
 *     behaviors for groups. For instance, all tooltips will be identified
 *     using the same groupName.
 *
 *   - `position` - `{$mdPanelPosition=}`: An $mdPanelPosition object that
 *     specifies the alignment of the panel. For more information, see
 *     `$mdPanelPosition`.
 *   - `animation` - `{$mdPanelAnimation=}`: An $mdPanelAnimation object that
 *     specifies the animation of the panel. For more information, see
 *     `$mdPanelAnimation`.
 *   - `hasBackdrop` - `{boolean=}`: Whether there should be an opaque backdrop
 *     behind the panel. Defaults to false.
 *   - `escapeToClose` - `{boolean=}`: Whether the user can press escape to
 *     close the panel. Defaults to false.
 *   - `clickOutsideToClose` - `{boolean=}`: Whether the user can click
 *     outside the panel to close it. Defaults to false.
 *   - `disableParentScroll` - `{boolean=}`: Whether the user can scroll the
 *     page behind the panel. Defaults to false.
 *   - `fullScreen` - `{boolean=}`: Whether the panel should be full screen.
 *     Applies the class `.md-panel-fullscreen` to the panel on open. Defaults
 *     to false.
 *   - `trapFocus` - `{boolean=}`: Whether focus should be trapped within the
 *     panel. If `trapFocus` is true, the user will not be able to interact
 *     with the rest of the page until the panel is dismissed. Defaults to
 *     false.
 *   - `focusOnOpen` - `{boolean=}`: An option to override focus behavior on
 *     open. Only disable if focusing some other way, as focus management is
 *     required for panels to be accessible. Defaults to true.
 *
 * @returns {MdPanelRef} panelRef
 */


/**
 * @ngdoc method
 * @name $mdPanel#open
 * @description
 * Calls the create method above, then opens the panel. This is a shortcut for
 * creating and then calling open manually. If custom methods need to be
 * called when the panel is added to the DOM or opened, do not use this method.
 * Instead create the panel, chain promises on the domAdded and openComplete
 * methods, and call open from the returned panelRef.
 *
 * @param {Object=} opt_config Specific configuration object that may contain
 * the properties defined in `$mdPanel.create`.
 *
 * @returns {MdPanelRef} panelRef
 */


/**
 * @ngdoc method
 * @name $mdPanel#setGroupMaxOpen
 * @description
 * Sets the maximum number of panels in a group that can be opened at a given
 * time.
 *
 * @param groupName {string} The name of the group to configure.
 * @param maxOpen {number} The max number of panels that can be opened.
 */


/***************************************************************************************
 *                                       MdPanelRef                                    *
 ***************************************************************************************/


/**
 * @ngdoc object
 * @name MdPanelRef
 * @description
 * A reference to a created panel. This reference contains a unique id for the
 * panel, along with the following properties:
 *   - `id` - `{string}: The unique id for the panel. This id is used to track
 *     when a panel was interacted with.
 *   - `config` - `{Object=}`: The entire config object that was used in
 *     create.
 *   - `isOpen` - `{boolean}`: Whether the panel is attached to the DOM.
 *     Visibility to the user does not factor into isOpen.
 *
 * TODO(ErinCoughlan): Add the following properties.
 *   - `isHidden` - `{boolean}`: Whether the panel is attached to the DOM, but
 *     not visible to the user.
 *   - `onDomAdded` - `{function=}`: Callback function used to announce when
 *     the panel is added to the DOM.
 *   - `onOpenComplete` - `{function=}`: Callback function used to announce
 *     when the open() action is finished.
 *   - `onRemoving` - `{function=}`: Callback function used to announce the
 *     close/hide() action is starting. This allows developers to run custom
 *     animations in parallel the close animations.
 */

/**
 * @ngdoc method
 * @name MdPanelRef#open
 * @description
 * If the panel is not visible, opens an already created and configured panel.
 *
 * @returns {angular.$q.Promise} A promise that is resolved when the panel is
 * closed.
 */

/**
 * @ngdoc method
 * @name MdPanelRef#close
 * @description
 * If the panel is visible, closes the panel, resolving the promise that is
 * returned from `MdPanelRef#open`. This method destroys the reference to the
 * panel. In order to open the panel again, a new one must be created.
 */


/***************************************************************************************
 *                                 $mdPanelPosition                                    *
 ***************************************************************************************/


/**
 * @ngdoc object
 * @name $mdPanelPosition
 * @description
 * Object for configuring the position of the panel. Examples:
 *
 * Centering the panel:
 * `$mdPanelPosition.absolute().top(‘50%’).left(‘50%’);`
 *
 * Overlapping the panel with an element:
 * `$mdPanelPosition.relativeTo(someElement).top(‘0’).left(‘0’);`
 *
 * Aligning the panel with the bottom of an element:
 * `$mdPanelPosition.relativeTo(someElement);`
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#absolute
 * @description
 * Positions the panel absolutely relative to the parent element. If the parent is
 * document.body, this is equivalent to positioning the panel absolutely within the
 * viewport.
 * @returns {$mdPanelPosition}
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#relativeTo
 * @description
 * Positions the panel relative to a specific element.
 * @param {!angular.JQLite} element Element to position the panel with respect to.
 * @returns {$mdPanelPosition}
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#top
 * @description
 * Sets the value of `top` for the panel.
 * @param {string} top Value of `top`.
 * @returns {$mdPanelPosition}
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#bottom
 * @description
 * Sets the value of `bottom` for the panel.
 * @param {string} top Value of `bottom`.
 * @returns {$mdPanelPosition}
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#left
 * @description
 * Sets the value of `left` for the panel.
 * @param {string} top Value of `left`.
 * @returns {$mdPanelPosition}
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#right
 * @description
 * Sets the value of `right` for the panel.
 * @param {string} top Value of `right`.
 * @returns {$mdPanelPosition}
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#offsetX
 * @description
 * Sets the value of the offset in the x-direction.
 * @param {string} offsetX
 * @returns {$mdPanelPosition}
 */

/**
 * @ngdoc method
 * @name $mdPanelPosition#offsetY
 * @description
 * Sets the value of the offset in the y-direction.
 * @param {string} offsetY
 * @returns {$mdPanelPosition}
 */


/***************************************************************************************
 *                                   IMPLEMENTATION                                    *
 ***************************************************************************************/


/**
 * A service that is used for controlling/displaying panels on the screen.
 * @param {!angular.JQLite} $rootElement
 * @param {!angular.Scope} $rootScope
 * @param {!angular.$injector} $injector
 * @final @constructor @ngInject
 */
function MdPanelService($rootElement, $rootScope, $injector) {
  /**
   * Default config options for the panel.
   * @private {!Object}
   */
  this._defaultConfigOptions = {
    attachTo: $rootElement,
    scope: $rootScope.$new(true),
    bindToController: true
  };

  /** @private {!Object} */
  this._config = this._defaultConfigOptions;

  /** @private {!angular.$injector} */
  this._$injector = $injector;
}


/**
 * Creates a panel with the specified options.
 * @param {!Object=} opt_config Configuration object for the panel.
 * @returns {!MdPanelRef}
 */
MdPanelService.prototype.create = function(opt_config) {
  var configSettings = opt_config || {};

  angular.extend(this._config, configSettings);

  var instanceId = 'panel_' + this._$injector.get('$mdUtil').nextUid();
  var instanceConfig = angular.extend({id : instanceId}, this._config);

  return new MdPanelRef(instanceConfig, this._$injector);
};


/**
 * Creates and opens a panel with the specified options.
 * @param {!Object=} opt_config Configuration object for the panel.
 * @returns {!MdPanelRef} The panel created from create.
 */
MdPanelService.prototype.open = function(opt_config) {
  var panelRef = this.create(opt_config);
  panelRef.open();
  return panelRef;
};


/**
 * A reference to a created panel. This reference contains a unique id for the
 * panel, along with properties/functions used to control the panel.
 *
 * @param {!Object} config
 * @param {!angular.$injector} $injector
 * @final @constructor
 */
function MdPanelRef(config, $injector) {
  // Injected variables.
  /** @private @const {!angular.$q} */
  this._$q = $injector.get('$q');

  /** @private @const {!angular.$mdCompiler} */
  this._$mdCompiler = $injector.get('$mdCompiler');


  // Public variables.
  /**
   * Unique id for the panelRef.
   * @type {string}
   */
  this.id = config.id;

  /**
   * Whether the panel is opened. This is synchronous. When open is called,
   * isOpen is set to true. When close is called, isOpen is set to false.
   * @type {boolean}
   */
  this.isOpen = false;


  // Private variables.
  /** @private {!Object} */
  this._config = config;

  /** @private {!angular.$q.promise|undefined} */
  this._openPromise;

  /** @private {function(*)|undefined} */
  this._openReject;

  /** @private {!angular.$q.promise|undefined} */
  this._closePromise;

  /** @private {!angular.JQLite|undefined} */
  this._panelEl;
}


/**
 * Opens an already created and configured panel. If the panel is already
 * visible, does nothing.
 *
 * @returns {!angular.$q.Promise} A promise that is resolved when the panel
 * is opened and animations finish.
 */
MdPanelRef.prototype.open = function() {
  if (!this.isOpen) {
    this.isOpen = true;

    var self = this;
    this._openPromise = this._$q(function(resolve, reject) {
      self._openReject = reject;
      self._createPanel();
      resolve(self);
    });
  }

  // If the panel is already open, re-use the (already resolved) promise from
  // when it was opened.
  return this._openPromise;
};


/**
 * Closes the panel.
 *
 * @returns {!angular.$q.Promise} A promise that is resolved when the panel is
 * closed and animations finish.
 */
MdPanelRef.prototype.close = function() {
  if (this.isOpen) {
    this.isOpen = false;

    // TODO(ErinCoughlan) - Cancel any in-progress `opening`.

    if (!this._closePromise) {
      var self = this;
      this._closePromise = this._$q(function(resolve, reject) {
        // TODO(ErinCoughlan): Start the close animation.
        self._panelEl.remove();
        resolve(self);
      });

      this._closePromise.finally(function() {
        // Clear for next open/close pairing.
        self._closePromise = undefined;
      });
    }
  }

  // If the panel is already closed, re-use the (already resolved) promise from
  // when it was closed.
  return this._closePromise;
};


/**
 * Creates a panel and adds it to the dom.
 * @private
 */
MdPanelRef.prototype._createPanel = function() {
  var self = this;
  this._$mdCompiler.compile(this._config)
      .then(function(compileData) {
        self._panelEl = compileData.link(self._config.scope);
        // TODO(ErinCoughlan): Start the open animation.
        angular.element(self._config.attachTo).append(self._panelEl);
      });
};