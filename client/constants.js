/*
 * Applications.
 */

// Fetch.
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';
export const FETCH_APPLICATIONS_PENDING = 'FETCH_APPLICATIONS_PENDING';
export const FETCH_APPLICATIONS_REJECTED = 'FETCH_APPLICATIONS_REJECTED';
export const FETCH_APPLICATIONS_FULFILLED = 'FETCH_APPLICATIONS_FULFILLED';

/*
 * Auth.
 */

// Token.
export const LOADED_TOKEN = 'LOADED_TOKEN';
export const RECIEVED_TOKEN = 'RECIEVED_TOKEN';

// Login.
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const REDIRECT_LOGIN = 'REDIRECT_LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Logout.
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

/*
 * Connections.
 */

// Fetch.
export const FETCH_CONNECTIONS = 'FETCH_CONNECTIONS';
export const FETCH_CONNECTIONS_PENDING = 'FETCH_CONNECTIONS_PENDING';
export const FETCH_CONNECTIONS_REJECTED = 'FETCH_CONNECTIONS_REJECTED';
export const FETCH_CONNECTIONS_FULFILLED = 'FETCH_CONNECTIONS_FULFILLED';

/*
 * Configuration.
 */

// Fetch.
export const FETCH_RULE_STATUS = 'FETCH_RULE_STATUS';
export const FETCH_RULE_STATUS_PENDING = 'FETCH_RULE_STATUS_PENDING';
export const FETCH_RULE_STATUS_REJECTED = 'FETCH_RULE_STATUS_REJECTED';
export const FETCH_RULE_STATUS_FULFILLED = 'FETCH_RULE_STATUS_FULFILLED';

// Fetch.
export const FETCH_CONFIGURATION = 'FETCH_CONFIGURATION';
export const FETCH_CONFIGURATION_PENDING = 'FETCH_CONFIGURATION_PENDING';
export const FETCH_CONFIGURATION_REJECTED = 'FETCH_CONFIGURATION_REJECTED';
export const FETCH_CONFIGURATION_FULFILLED = 'FETCH_CONFIGURATION_FULFILLED';

// Save.
export const SAVE_CONFIGURATION = 'SAVE_CONFIGURATION';
export const SAVE_CONFIGURATION_PENDING = 'SAVE_CONFIGURATION_PENDING';
export const SAVE_CONFIGURATION_REJECTED = 'SAVE_CONFIGURATION_REJECTED';
export const SAVE_CONFIGURATION_FULFILLED = 'SAVE_CONFIGURATION_FULFILLED';

/*
 * Configuration Resource Server.
 */

// Fetch.
export const FETCH_CONFIGURATION_RESOURCESERVER = 'FETCH_CONFIGURATION_RESOURCESERVER';
export const FETCH_CONFIGURATION_RESOURCESERVER_PENDING = 'FETCH_CONFIGURATION_RESOURCESERVER_PENDING';
export const FETCH_CONFIGURATION_RESOURCESERVER_REJECTED = 'FETCH_CONFIGURATION_RESOURCESERVER_REJECTED';
export const FETCH_CONFIGURATION_RESOURCESERVER_FULFILLED = 'FETCH_CONFIGURATION_RESOURCESERVER_FULFILLED';

// Save.
export const SAVE_CONFIGURATION_RESOURCESERVER = 'SAVE_CONFIGURATION_RESOURCESERVER';
export const SAVE_CONFIGURATION_RESOURCESERVER_PENDING = 'SAVE_CONFIGURATION_RESOURCESERVER_PENDING';
export const SAVE_CONFIGURATION_RESOURCESERVER_REJECTED = 'SAVE_CONFIGURATION_RESOURCESERVER_REJECTED';
export const SAVE_CONFIGURATION_RESOURCESERVER_FULFILLED = 'SAVE_CONFIGURATION_RESOURCESERVER_FULFILLED';

// Delete.
export const REMOVE_CONFIGURATION_RESOURCESERVER = 'REMOVE_CONFIGURATION_RESOURCESERVER';
export const REMOVE_CONFIGURATION_RESOURCESERVER_PENDING = 'REMOVE_CONFIGURATION_RESOURCESERVER_PENDING';
export const REMOVE_CONFIGURATION_RESOURCESERVER_REJECTED = 'REMOVE_CONFIGURATION_RESOURCESERVER_REJECTED';
export const REMOVE_CONFIGURATION_RESOURCESERVER_FULFILLED = 'REMOVE_CONFIGURATION_RESOURCESERVER_FULFILLED';

/*
 * Groups.
 */

// Fetch all.
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_GROUPS_PENDING = 'FETCH_GROUPS_PENDING';
export const FETCH_GROUPS_REJECTED = 'FETCH_GROUPS_REJECTED';
export const FETCH_GROUPS_FULFILLED = 'FETCH_GROUPS_FULFILLED';
export const CLOSE_UPDATE_GROUP = 'CLOSE_UPDATE_GROUP';
export const CLOSE_DELETE_GROUP = 'CLOSE_DELETE_GROUP';

// Fetch single.
export const FETCH_GROUP = 'FETCH_GROUP';
export const FETCH_GROUP_PENDING = 'FETCH_GROUP_PENDING';
export const FETCH_GROUP_REJECTED = 'FETCH_GROUP_REJECTED';
export const FETCH_GROUP_FULFILLED = 'FETCH_GROUP_FULFILLED';

// Save.
export const SAVE_GROUP = 'SAVE_GROUP';
export const SAVE_GROUP_PENDING = 'SAVE_GROUP_PENDING';
export const SAVE_GROUP_REJECTED = 'SAVE_GROUP_REJECTED';
export const SAVE_GROUP_FULFILLED = 'SAVE_GROUP_FULFILLED';

export const UPDATE_GROUP = 'UPDATE_GROUP';
export const UPDATE_GROUP_PENDING = 'UPDATE_GROUP_PENDING';
export const UPDATE_GROUP_REJECTED = 'UPDATE_GROUP_REJECTED';
export const UPDATE_GROUP_FULFILLED = 'UPDATE_GROUP_FULFILLED';

// Create or edit.
export const CREATE_GROUP = 'CREATE_GROUP';
export const EDIT_GROUP = 'EDIT_GROUP';
export const EDIT_GROUP_USERS = 'EDIT_GROUP_USERS';
export const CLEAR_GROUP = 'CLEAR_GROUP';

// Delete.
export const REQUEST_DELETE_GROUP = 'REQUEST_DELETE_GROUP';
export const CANCEL_DELETE_GROUP = 'CANCEL_DELETE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const DELETE_GROUP_PENDING = 'DELETE_GROUP_PENDING';
export const DELETE_GROUP_REJECTED = 'DELETE_GROUP_REJECTED';
export const DELETE_GROUP_FULFILLED = 'DELETE_GROUP_FULFILLED';

/*
 * Group Mappings
 */

export const FETCH_GROUP_MAPPINGS = 'FETCH_GROUP_MAPPINGS';
export const FETCH_GROUP_MAPPINGS_PENDING = 'FETCH_GROUP_MAPPINGS_PENDING';
export const FETCH_GROUP_MAPPINGS_REJECTED = 'FETCH_GROUP_MAPPINGS_REJECTED';
export const FETCH_GROUP_MAPPINGS_FULFILLED = 'FETCH_GROUP_MAPPINGS_FULFILLED';

// Create or edit.
export const CREATE_GROUP_MAPPING = 'CREATE_GROUP_MAPPING';
export const EDIT_GROUP_MAPPING = 'EDIT_GROUP_MAPPING';
export const CLEAR_GROUP_MAPPING = 'CLEAR_GROUP_MAPPING';

// Save.
export const SAVE_GROUP_MAPPING = 'SAVE_GROUP_MAPPING';
export const SAVE_GROUP_MAPPING_PENDING = 'SAVE_GROUP_MAPPING_PENDING';
export const SAVE_GROUP_MAPPING_REJECTED = 'SAVE_GROUP_MAPPING_REJECTED';
export const SAVE_GROUP_MAPPING_FULFILLED = 'SAVE_GROUP_MAPPING_FULFILLED';

// Delete.
export const REQUEST_DELETE_GROUP_MAPPING = 'REQUEST_DELETE_GROUP_MAPPING';
export const CANCEL_DELETE_GROUP_MAPPING = 'CANCEL_DELETE_GROUP_MAPPING';
export const DELETE_GROUP_MAPPING = 'DELETE_GROUP_MAPPING';
export const DELETE_GROUP_MAPPING_PENDING = 'DELETE_GROUP_MAPPING_PENDING';
export const DELETE_GROUP_MAPPING_REJECTED = 'DELETE_GROUP_MAPPING_REJECTED';
export const DELETE_GROUP_MAPPING_FULFILLED = 'DELETE_GROUP_MAPPING_FULFILLED';

/*
 * Group Members
 */

// Add.
export const ADD_GROUP_MEMBERS = 'ADD_GROUP_MEMBERS';
export const ADD_GROUP_MEMBERS_PENDING = 'ADD_GROUP_MEMBERS_PENDING';
export const ADD_GROUP_MEMBERS_REJECTED = 'ADD_GROUP_MEMBERS_REJECTED';
export const ADD_GROUP_MEMBERS_FULFILLED = 'ADD_GROUP_MEMBERS_FULFILLED';

// Fetch.
export const FETCH_GROUP_MEMBERS = 'FETCH_GROUP_MEMBERS';
export const FETCH_GROUP_MEMBERS_PENDING = 'FETCH_GROUP_MEMBERS_PENDING';
export const FETCH_GROUP_MEMBERS_REJECTED = 'FETCH_GROUP_MEMBERS_REJECTED';
export const FETCH_GROUP_MEMBERS_FULFILLED = 'FETCH_GROUP_MEMBERS_FULFILLED';

// Fetch.
export const FETCH_GROUP_MEMBERS_NESTED = 'FETCH_GROUP_MEMBERS_NESTED';
export const FETCH_GROUP_MEMBERS_NESTED_PENDING = 'FETCH_GROUP_MEMBERS_NESTED_PENDING';
export const FETCH_GROUP_MEMBERS_NESTED_REJECTED = 'FETCH_GROUP_MEMBERS_NESTED_REJECTED';
export const FETCH_GROUP_MEMBERS_NESTED_FULFILLED = 'FETCH_GROUP_MEMBERS_NESTED_FULFILLED';

// Remove member.
export const REQUEST_REMOVE_GROUP_MEMBER = 'REQUEST_REMOVE_GROUP_MEMBER';
export const CANCEL_REMOVE_GROUP_MEMBER = 'CANCEL_REMOVE_GROUP_MEMBER';
export const REMOVE_GROUP_MEMBER = 'REMOVE_GROUP_MEMBER';
export const REMOVE_GROUP_MEMBER_PENDING = 'REMOVE_GROUP_MEMBER_PENDING';
export const REMOVE_GROUP_MEMBER_REJECTED = 'REMOVE_GROUP_MEMBER_REJECTED';
export const REMOVE_GROUP_MEMBER_FULFILLED = 'REMOVE_GROUP_MEMBER_FULFILLED';

/*
 * Nested groups.
 */

// Add.
export const ADD_GROUP_NESTED = 'ADD_GROUP_NESTED';
export const ADD_GROUP_NESTED_PENDING = 'ADD_GROUP_NESTED_PENDING';
export const ADD_GROUP_NESTED_REJECTED = 'ADD_GROUP_NESTED_REJECTED';
export const ADD_GROUP_NESTED_FULFILLED = 'ADD_GROUP_NESTED_FULFILLED';

// Fetch.
export const FETCH_GROUP_NESTED = 'FETCH_GROUP_NESTED';
export const FETCH_GROUP_NESTED_PENDING = 'FETCH_GROUP_NESTED_PENDING';
export const FETCH_GROUP_NESTED_REJECTED = 'FETCH_GROUP_NESTED_REJECTED';
export const FETCH_GROUP_NESTED_FULFILLED = 'FETCH_GROUP_NESTED_FULFILLED';

// Remove.
export const REQUEST_REMOVE_GROUP_NESTED = 'REQUEST_REMOVE_GROUP_NESTED';
export const CANCEL_REMOVE_GROUP_NESTED = 'CANCEL_REMOVE_GROUP_NESTED';
export const REMOVE_GROUP_NESTED = 'REMOVE_GROUP_NESTED';
export const REMOVE_GROUP_NESTED_PENDING = 'REMOVE_GROUP_NESTED_PENDING';
export const REMOVE_GROUP_NESTED_REJECTED = 'REMOVE_GROUP_NESTED_REJECTED';
export const REMOVE_GROUP_NESTED_FULFILLED = 'REMOVE_GROUP_NESTED_FULFILLED';

/*
 * Group Picker.
 */

export const CONFIRM_GROUP_PICKER = 'CONFIRM_GROUP_PICKER';
export const CANCEL_GROUP_PICKER = 'CANCEL_GROUP_PICKER';

// Open.
export const OPEN_GROUP_PICKER = 'OPEN_GROUP_PICKER';

// Load.
export const LOAD_GROUP_PICKER = 'LOAD_GROUP_PICKER';
export const LOAD_GROUP_PICKER_PENDING = 'LOAD_GROUP_PICKER_PENDING';
export const LOAD_GROUP_PICKER_REJECTED = 'LOAD_GROUP_PICKER_REJECTED';
export const LOAD_GROUP_PICKER_FULFILLED = 'LOAD_GROUP_PICKER_FULFILLED';

/*
 * Roles.
 */

// Fetch all.
export const FETCH_ROLES = 'FETCH_ROLES';
export const FETCH_ROLES_PENDING = 'FETCH_ROLES_PENDING';
export const FETCH_ROLES_REJECTED = 'FETCH_ROLES_REJECTED';
export const FETCH_ROLES_FULFILLED = 'FETCH_ROLES_FULFILLED';

// Fetch single.
export const FETCH_ROLE = 'FETCH_ROLE';
export const FETCH_ROLE_PENDING = 'FETCH_ROLE_PENDING';
export const FETCH_ROLE_REJECTED = 'FETCH_ROLE_REJECTED';
export const FETCH_ROLE_FULFILLED = 'FETCH_ROLE_FULFILLED';

// Save.
export const SAVE_ROLE = 'SAVE_ROLE';
export const SAVE_ROLE_PENDING = 'SAVE_ROLE_PENDING';
export const SAVE_ROLE_REJECTED = 'SAVE_ROLE_REJECTED';
export const SAVE_ROLE_FULFILLED = 'SAVE_ROLE_FULFILLED';

// Create or edit.
export const CREATE_ROLE = 'CREATE_ROLE';
export const EDIT_ROLE = 'EDIT_ROLE';
export const CLEAR_ROLE = 'CLEAR_ROLE';

export const ROLE_APPLICATION_SELECTED = 'ROLE_APPLICATION_SELECTED';

// Delete.
export const REQUEST_DELETE_ROLE = 'REQUEST_DELETE_ROLE';
export const CANCEL_DELETE_ROLE = 'CANCEL_DELETE_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';
export const DELETE_ROLE_PENDING = 'DELETE_ROLE_PENDING';
export const DELETE_ROLE_REJECTED = 'DELETE_ROLE_REJECTED';
export const DELETE_ROLE_FULFILLED = 'DELETE_ROLE_FULFILLED';

/*
 * Permissions.
 */

// Fetch all.
export const FETCH_PERMISSIONS = 'FETCH_PERMISSIONS';
export const FETCH_PERMISSIONS_PENDING = 'FETCH_PERMISSIONS_PENDING';
export const FETCH_PERMISSIONS_REJECTED = 'FETCH_PERMISSIONS_REJECTED';
export const FETCH_PERMISSIONS_FULFILLED = 'FETCH_PERMISSIONS_FULFILLED';

// Fetch single.
export const FETCH_PERMISSION = 'FETCH_PERMISSION';
export const FETCH_PERMISSION_PENDING = 'FETCH_PERMISSION_PENDING';
export const FETCH_PERMISSION_REJECTED = 'FETCH_PERMISSION_REJECTED';
export const FETCH_PERMISSION_FULFILLED = 'FETCH_PERMISSION_FULFILLED';

// Save.
export const SAVE_PERMISSION = 'SAVE_PERMISSION';
export const SAVE_PERMISSION_PENDING = 'SAVE_PERMISSION_PENDING';
export const SAVE_PERMISSION_REJECTED = 'SAVE_PERMISSION_REJECTED';
export const SAVE_PERMISSION_FULFILLED = 'SAVE_PERMISSION_FULFILLED';

// Create or edit.
export const CREATE_PERMISSION = 'CREATE_PERMISSION';
export const EDIT_PERMISSION = 'EDIT_PERMISSION';
export const CLEAR_PERMISSION = 'CLEAR_PERMISSION';

// Delete.
export const REQUEST_DELETE_PERMISSION = 'REQUEST_DELETE_PERMISSION';
export const CANCEL_DELETE_PERMISSION = 'CANCEL_DELETE_PERMISSION';
export const DELETE_PERMISSION = 'DELETE_PERMISSION';
export const DELETE_PERMISSION_PENDING = 'DELETE_PERMISSION_PENDING';
export const DELETE_PERMISSION_REJECTED = 'DELETE_PERMISSION_REJECTED';
export const DELETE_PERMISSION_FULFILLED = 'DELETE_PERMISSION_FULFILLED';

/*
 * Users.
 */

// Fetch all.
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';

// Reset Fetched Users.
export const RESET_FETCH_USERS = 'RESET_FETCH_USERS';

// Fetch single.
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

// Fetch user authorization.
export const FETCH_USER_NESTED_GROUPS = 'FETCH_USER_NESTED_GROUPS';
export const FETCH_USER_NESTED_GROUPS_PENDING = 'FETCH_USER_NESTED_GROUPS_PENDING';
export const FETCH_USER_NESTED_GROUPS_REJECTED = 'FETCH_USER_NESTED_GROUPS_REJECTED';
export const FETCH_USER_NESTED_GROUPS_FULFILLED = 'FETCH_USER_NESTED_GROUPS_FULFILLED';

// Fetch logs.
export const FETCH_USER_LOGS = 'FETCH_USER_LOGS';
export const FETCH_USER_LOGS_PENDING = 'FETCH_USER_LOGS_PENDING';
export const FETCH_USER_LOGS_REJECTED = 'FETCH_USER_LOGS_REJECTED';
export const FETCH_USER_LOGS_FULFILLED = 'FETCH_USER_LOGS_FULFILLED';

// Fetch devices.
export const FETCH_USER_DEVICES = 'FETCH_USER_DEVICES';
export const FETCH_USER_DEVICES_PENDING = 'FETCH_USER_DEVICES_PENDING';
export const FETCH_USER_DEVICES_REJECTED = 'FETCH_USER_DEVICES_REJECTED';
export const FETCH_USER_DEVICES_FULFILLED = 'FETCH_USER_DEVICES_FULFILLED';

// Fetch groups.
export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS';
export const FETCH_USER_GROUPS_PENDING = 'FETCH_USER_GROUPS_PENDING';
export const FETCH_USER_GROUPS_REJECTED = 'FETCH_USER_GROUPS_REJECTED';
export const FETCH_USER_GROUPS_FULFILLED = 'FETCH_USER_GROUPS_FULFILLED';

// Remove MFA.
export const REQUEST_REMOVE_MULTIFACTOR = 'REQUEST_REMOVE_MULTIFACTOR';
export const CANCEL_REMOVE_MULTIFACTOR = 'CANCEL_REMOVE_MULTIFACTOR';
export const REMOVE_MULTIFACTOR = 'REMOVE_MULTIFACTOR';
export const REMOVE_MULTIFACTOR_PENDING = 'REMOVE_MULTIFACTOR_PENDING';
export const REMOVE_MULTIFACTOR_REJECTED = 'REMOVE_MULTIFACTOR_REJECTED';
export const REMOVE_MULTIFACTOR_FULFILLED = 'REMOVE_MULTIFACTOR_FULFILLED';

// Block user.
export const REQUEST_BLOCK_USER = 'REQUEST_BLOCK_USER';
export const CANCEL_BLOCK_USER = 'CANCEL_BLOCK_USER';
export const BLOCK_USER = 'BLOCK_USER';
export const BLOCK_USER_PENDING = 'BLOCK_USER_PENDING';
export const BLOCK_USER_REJECTED = 'BLOCK_USER_REJECTED';
export const BLOCK_USER_FULFILLED = 'BLOCK_USER_FULFILLED';

// Unblock user.
export const REQUEST_UNBLOCK_USER = 'REQUEST_UNBLOCK_USER';
export const CANCEL_UNBLOCK_USER = 'CANCEL_UNBLOCK_USER';
export const UNBLOCK_USER = 'UNBLOCK_USER';
export const UNBLOCK_USER_PENDING = 'UNBLOCK_USER_PENDING';
export const UNBLOCK_USER_REJECTED = 'UNBLOCK_USER_REJECTED';
export const UNBLOCK_USER_FULFILLED = 'UNBLOCK_USER_FULFILLED';

/*
 * User Picker.
 */

export const CONFIRM_USER_PICKER = 'CONFIRM_USER_PICKER';
export const CANCEL_USER_PICKER = 'CANCEL_USER_PICKER';

// Open.
export const OPEN_USER_PICKER = 'OPEN_USER_PICKER';

// Search.
export const SEARCH_USER_PICKER = 'SEARCH_USER_PICKER';
export const SEARCH_USER_PICKER_PENDING = 'SEARCH_USER_PICKER_PENDING';
export const SEARCH_USER_PICKER_REJECTED = 'SEARCH_USER_PICKER_REJECTED';
export const SEARCH_USER_PICKER_FULFILLED = 'SEARCH_USER_PICKER_FULFILLED';

// Select.
export const SELECT_USER = 'SELECT_USER';
export const UNSELECT_USER = 'UNSELECT_USER';

// Configuration
export const FETCH_CONFIGURATION_EXPORT = 'FETCH_CONFIGURATION_EXPORT';
export const FETCH_CONFIGURATION_EXPORT_PENDING = 'FETCH_CONFIGURATION_EXPORT_PENDING';
export const FETCH_CONFIGURATION_EXPORT_REJECTED = 'FETCH_CONFIGURATION_EXPORT_REJECTED';
export const FETCH_CONFIGURATION_EXPORT_FULFILLED = 'FETCH_CONFIGURATION_EXPORT_FULFILLED';

export const FETCH_CONFIGURATION_IMPORT = 'FETCH_CONFIGURATION_IMPORT';
export const FETCH_CONFIGURATION_IMPORT_PENDING = 'FETCH_CONFIGURATION_IMPORT_PENDING';
export const FETCH_CONFIGURATION_IMPORT_REJECTED = 'FETCH_CONFIGURATION_IMPORT_REJECTED';
export const FETCH_CONFIGURATION_IMPORT_FULFILLED = 'FETCH_CONFIGURATION_IMPORT_FULFILLED';

export const FETCH_CONFIGURATION_ADD_ERROR = 'FETCH_CONFIGURATION_ADD_ERROR';
export const FETCH_CONFIGURATION_CLOSE_ERROR = 'FETCH_CONFIGURATION_CLOSE_ERROR';
export const OPEN_CONFIGURATION_PREVIEW = 'OPEN_CONFIGURATION_PREVIEW';
export const CLOSE_CONFIGURATION_PREVIEW = 'CLOSE_CONFIGURATION_PREVIEW';
export const SET_CONFIGURATION_TAB = 'SET_CONFIGURATION_TAB';


export const ADD_ROLES_OPEN = 'ADD_ROLES_OPEN';
export const ADD_ROLES_CLOSE = 'ADD_ROLES_CLOSE';

export const SAVE_USER_ROLES = 'SAVE_USER_ROLES';
export const SAVE_USER_ROLES_PENDING = 'SAVE_USER_ROLES_PENDING';
export const SAVE_USER_ROLES_REJECTED = 'SAVE_USER_ROLES_REJECTED';
export const SAVE_USER_ROLES_FULFILLED = 'SAVE_USER_ROLES_FULFILLED';

export const FETCH_USER_ROLES = 'FETCH_USER_ROLES';
export const FETCH_USER_ROLES_PENDING = 'FETCH_USER_ROLES_PENDING';
export const FETCH_USER_ROLES_REJECTED = 'FETCH_USER_ROLES_REJECTED';
export const FETCH_USER_ROLES_FULFILLED = 'FETCH_USER_ROLES_FULFILLED';

export const FETCH_USER_ALL_ROLES = 'FETCH_USER_ALL_ROLES';
export const FETCH_USER_ALL_ROLES_PENDING = 'FETCH_USER_ALL_ROLES_PENDING';
export const FETCH_USER_ALL_ROLES_REJECTED = 'FETCH_USER_ALL_ROLES_REJECTED';
export const FETCH_USER_ALL_ROLES_FULFILLED = 'FETCH_USER_ALL_ROLES_FULFILLED';

export const GROUP_ADD_ROLES_OPEN = 'GROUP_ADD_ROLES_OPEN';
export const GROUP_ADD_ROLES_CLOSE = 'GROUP_ADD_ROLES_CLOSE';

export const SAVE_GROUP_ROLES = 'SAVE_GROUP_ROLES';
export const SAVE_GROUP_ROLES_PENDING = 'SAVE_GROUP_ROLES_PENDING';
export const SAVE_GROUP_ROLES_REJECTED = 'SAVE_GROUP_ROLES_REJECTED';
export const SAVE_GROUP_ROLES_FULFILLED = 'SAVE_GROUP_ROLES_FULFILLED';

export const FETCH_GROUP_ROLES = 'FETCH_GROUP_ROLES';
export const FETCH_GROUP_ROLES_PENDING = 'FETCH_GROUP_ROLES_PENDING';
export const FETCH_GROUP_ROLES_REJECTED = 'FETCH_GROUP_ROLES_REJECTED';
export const FETCH_GROUP_ROLES_FULFILLED = 'FETCH_GROUP_ROLES_FULFILLED';


export const REQUEST_DELETE_GROUP_ROLE = 'REQUEST_DELETE_GROUP_ROLE';
export const CANCEL_DELETE_GROUP_ROLE = 'CANCEL_DELETE_GROUP_ROLE';
export const DELETE_GROUP_ROLE = 'DELETE_GROUP_ROLE';
export const DELETE_GROUP_ROLE_PENDING = 'DELETE_GROUP_ROLE_PENDING';
export const DELETE_GROUP_ROLE_REJECTED = 'DELETE_GROUP_ROLE_REJECTED';
export const DELETE_GROUP_ROLE_FULFILLED = 'DELETE_GROUP_ROLE_FULFILLED';

export const REQUEST_DELETE_USER_ROLE = 'REQUEST_DELETE_USER_ROLE';
export const CANCEL_DELETE_USER_ROLE = 'CANCEL_DELETE_USER_ROLE';
export const DELETE_USER_ROLE = 'DELETE_USER_ROLE';
export const DELETE_USER_ROLE_PENDING = 'DELETE_USER_ROLE_PENDING';
export const DELETE_USER_ROLE_REJECTED = 'DELETE_USER_ROLE_REJECTED';
export const DELETE_USER_ROLE_FULFILLED = 'DELETE_USER_ROLE_FULFILLED';
