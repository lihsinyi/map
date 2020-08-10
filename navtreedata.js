/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "The Sparta Modeling Framework", "index.html", [
    [ "Sparta", "index.html", null ],
    [ "Analysis Tools", "tools.html", null ],
    [ "Simulator Application Level", "application.html", null ],
    [ "Best Practices, Suggestions on using Sparta", "best_practices.html", [
      [ "Using Sparta Asserts", "best_practices.html#sparta_asserts", null ],
      [ "Using Sparta compile-time hints", "best_practices.html#sparta_expect", null ],
      [ "Take Advantage of C++11/17!", "best_practices.html#cpp_eleven", null ],
      [ "How to Use the Port/Event Mechansim Effectively", "best_practices.html#discrete_event", [
        [ "Phases", "best_practices.html#phases", null ],
        [ "Using The Phases", "best_practices.html#using_phase", null ]
      ] ]
    ] ],
    [ "Building the Framework", "building.html", null ],
    [ "Sparta Client APIs", "client_apis.html", null ],
    [ "Command Command Line Interface", "common_cmdline.html", [
      [ "CommandLineSimulator", "common_cmdline.html#cmdline_sim", [
        [ "Sparta Header Files", "building.html#includes", null ],
        [ "Sparta Libraries", "building.html#linking", null ],
        [ "Logging Configuration", "common_cmdline.html#cmdline_log_cfg", null ],
        [ "Command Line Simulation Configuration", "common_cmdline.html#cmdline_sim_cfg", null ]
      ] ],
      [ "Example Output", "common_cmdline.html#example_cmdline_help_out", null ]
    ] ],
    [ "Communication, Events, and Scheduling", "communication.html", [
      [ "Ports", "communication.html#comm_ports", [
        [ "sparta::SyncPorts", "communication.html#sync_ports", null ]
      ] ],
      [ "Events", "communication.html#comm_events", null ],
      [ "Clocks", "communication.html#comm_clocks", null ],
      [ "Scheduling", "communication.html#comm_schedulers", [
        [ "sparta::Scheduler", "communication.html#sparta_Scheduler", null ],
        [ "sparta::SysCSpartaSchedulerAdapter", "communication.html#sysc_scheduler", null ]
      ] ]
    ] ],
    [ "Core Example Using Sparta", "core_example.html", [
      [ "Example Core Layout", "core_example.html#example_core", null ],
      [ "Building", "core_example.html#Building", null ],
      [ "Invocations", "core_example.html#Invocations", [
        [ "Running/Configuring", "core_example.html#run_config_core_example", null ],
        [ "Debugging/Logging", "core_example.html#debugging_logging_core_example", null ],
        [ "Generating Reports", "core_example.html#reporting_core_example", null ],
        [ "Generating Pipeouts", "core_example.html#pipeouts_core_example", null ]
      ] ]
    ] ],
    [ "Sparta Command Line Interface End-User Guide", "end_user.html", [
      [ "1 Simulator Invocation", "end_user.html#invocation", [
        [ "1.1 I/O Policies", "end_user.html#io_policies", null ],
        [ "1.2 Sparta Basic Command-Line Options", "end_user.html#sparta_cmds", null ],
        [ "1.3 Application-Specific Commands", "end_user.html#app_cmds", null ],
        [ "1.4 Sparta Advanced commands", "end_user.html#sparta_advanced_cmds", null ],
        [ "1.5 Sparta Simulation Debug commands", "end_user.html#sim_dbg_cmds", null ]
      ] ],
      [ "2 Control and Configuration", "end_user.html#ctrl_cfg", [
        [ "2.1 Parameters", "end_user.html#ctrl_cfg_parameters", null ],
        [ "2.2 Selecting Architectures", "end_user.html#ctrl_cfg_architecture", null ],
        [ "2.3 Numeric Constants", "end_user.html#numeric_constants", null ]
      ] ],
      [ "3 Simulator Output", "end_user.html#output", [
        [ "3.1 Automatic Summary", "end_user.html#auto_summary", null ],
        [ "3.2 Report Generation", "end_user.html#report_gen", null ],
        [ "3.3 Message Logging", "end_user.html#msg_logging", null ],
        [ "3.4 Notification Logging", "end_user.html#notification_logging", null ],
        [ "3.5 Performance Events", "end_user.html#perf_events", null ],
        [ "3.6 Pipeline Collection", "end_user.html#pipeline_collection", null ],
        [ "3.7 Post-Run Debug dumps", "end_user.html#debug_dump", null ],
        [ "3.4 Backtraces", "end_user.html#backtraces", null ],
        [ "3.8 Device Tree Inspection", "end_user.html#tree_inspection", null ]
      ] ],
      [ "4 Running with a debugger", "end_user.html#run_with_debugger", [
        [ "GDB", "end_user.html#run_with_dbg_gdb", null ],
        [ "Other Debuggers", "end_user.html#run_with_dbg_other", null ]
      ] ],
      [ "4 Post-processing and Visualization", "end_user.html#data_proc_vis", [
        [ "4.1 Pipeline viewer (Argos)", "end_user.html#argos", null ]
      ] ]
    ] ],
    [ "Sparta File formats", "formats.html", null ],
    [ "Parameter/Configuration Format (.cfg,.yaml)", "param_format.html", [
      [ "Nesting", "param_format.html#param_format_nesting", null ],
      [ "Parameter Assignment Attributes and Optional Parameters", "param_format.html#param_format_attributes", null ],
      [ "Examples", "param_format.html#param_format_examples", null ]
    ] ],
    [ "Report Definition Format (.rrep,.yaml)", "report_def_format.html", [
      [ "Overview", "report_def_format.html#report_def_overview", null ],
      [ "Implementation", "report_def_format.html#report_def", null ],
      [ "Structure", "report_def_format.html#report_def_structure", [
        [ "Report Fields", "report_def_format.html#report_def_field", null ],
        [ "Example Report Definition", "report_def_format.html#report_def_example", null ],
        [ "Field Declarations", "report_def_format.html#report_def_field_declarations", null ],
        [ "Field Name Variables", "report_def_format.html#report_def_field_name_variables", null ],
        [ "Subreports", "report_def_format.html#report_def_subreports", null ],
        [ "Reserved Nodes", "report_def_format.html#report_def_reserved_nodes", null ],
        [ "Node Scope Qualifiers", "report_def_format.html#report_def_scope_qual", null ],
        [ "scope Wildcards", "report_def_format.html#report_def_scope_wildcards", null ],
        [ "Statistical Expressions", "report_def_format.html#report_def_expressions", null ],
        [ "Include Directives", "report_def_format.html#report_def_includes", null ],
        [ "Style section", "report_def_format.html#report_def_style", null ],
        [ "Autopopulation Blocks", "report_def_format.html#report_def_autopop", null ]
      ] ],
      [ "Field Declaration Path/Expression Ambiguity", "report_def_format.html#report_def_var_name_ambiguity", null ],
      [ "Report Definition Directive and Option Reference", "report_def_format.html#report_def_directive_ref", null ],
      [ "Limitations of Report Definitions", "report_def_format.html#report_def_lims", null ]
    ] ],
    [ "Report Output Formats", "report_out_format.html", [
      [ "Plaintext (.txt, .text)", "report_out_format.html#report_out_format_plaintext", null ],
      [ "CSV (.csv)", "report_out_format.html#report_out_format_csv", null ],
      [ "BasicHTML (.html, .htm)", "report_out_format.html#report_out_format_basichtml", null ],
      [ "Gnuplot (.gnuplot, .gplt)", "report_out_format.html#report_out_format_gnuplot", null ],
      [ "PythonDict (.python, .python)", "report_out_format.html#report_out_format_pythondict", null ],
      [ "JavascriptObject (.json)", "report_out_format.html#report_out_format_json", null ]
    ] ],
    [ "Pipeline Collection Format (index.bin, location.dat, record.bin, simulation.info, clock.dat)", "pipeout_format.html", null ],
    [ "Checkpointer Format", "checkpoint_format.html", null ],
    [ "Logging Output formats (.log, .log.raw, .log.basic, log.verbose)", "log_out_format.html", null ],
    [ "Framework Development", "framework_dev.html", [
      [ "Changelogs", "framework_dev.html#changelogs", null ],
      [ "Regression Testing", "framework_dev.html#regression", null ],
      [ "Meta Documentation", "framework_dev.html#meta_doc", null ],
      [ "Page Content", "framework_dev.html#content", [
        [ "Feature Description", "framework_dev.html#desc", null ],
        [ "Goals", "framework_dev.html#goal", null ],
        [ "Relevant Requirements", "framework_dev.html#reqs", null ],
        [ "Conceptual Usage", "framework_dev.html#concept", null ],
        [ "Example Usage", "framework_dev.html#examples", null ],
        [ "References", "framework_dev.html#references", null ]
      ] ],
      [ "convention Doxygen Convention", "framework_dev.html#doxygen", [
        [ "Code Documentation Convention", "framework_dev.html#code_conv", null ],
        [ "Texual Documentation Convention", "framework_dev.html#text_conv", null ]
      ] ]
    ] ],
    [ "Sparta Kernel Interface APIs (sparta/kernel)", "kernel_overview.html", null ],
    [ "Textual Message Logging", "logging.html", [
      [ "Logging System Goals", "logging.html#logging_goals", null ],
      [ "Logging System Design Requirements", "logging.html#log_des_reqs", null ],
      [ "Conceptual Usage", "logging.html#logg_concept_usage", [
        [ "Scoped Logging", "logging.html#scoped_log", null ],
        [ "Global Logging", "logging.html#global_log", null ]
      ] ],
      [ "Capturing Log Messages", "logging.html#log_capturing", null ],
      [ "Usage Notes", "logging.html#log_usage_notes", null ],
      [ "Implementation Notes", "logging.html#log_impl_notes", null ]
    ] ],
    [ "Sparta API", "modeling.html", null ],
    [ "Simulator Configuration", "config.html", [
      [ "Configuration Goals", "config.html#config_goals", null ],
      [ "Simulator Subclass Configuration", "config.html#config_usage", null ],
      [ "Configuration System Design Requirements", "config.html#config_des_req", null ]
    ] ],
    [ "Skeleton Pipeline Using Sparta", "skeleton_example.html", [
      [ "Skeleton Pipeline Layout", "skeleton_example.html#skeleton_layout", [
        [ "Sparta Pieces/Parts", "modeling.html#spartaparts", null ],
        [ "Sparta Application APIs (sparta/app)", "modeling.html#app_overview", null ],
        [ "Sparta Events API (sparta/events)", "modeling.html#events_overview", null ],
        [ "Sparta Ports API (sparta/ports)", "modeling.html#ports_overview", null ],
        [ "Sparta Statistics/Counter API (sparta/statistics)", "modeling.html#statistics_overview", null ],
        [ "Sparta Collection APIs (sparta/collection)", "modeling.html#collection_overview", null ],
        [ "Sparta Memory Interface APIs (sparta/memory)", "modeling.html#memory_overview", null ],
        [ "Sparta Utilities/Tools APIs (sparta/utils)", "modeling.html#utils_overview", null ],
        [ "Looking at the Code", "skeleton_example.html#skeleton_looking", null ]
      ] ]
    ] ],
    [ "Timed Component Tutorial", "perf_model_tutorial.html", null ],
    [ "Precedence operators for EventNode/Scheduleables", "precedence_rules.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"",
"ExpressionNode_8hpp_source.html",
"SimpleMemoryMap_8hpp.html",
"classSkeletonSimulator.html#a08f6acb54b6f65f4f76b62db61d604f7",
"classsparta_1_1Array.html",
"classsparta_1_1Counter.html#a34eb39077be7988ae319d3d0810d4192",
"classsparta_1_1ExtensionDescriptor.html#a37d4d511cfeb3631d372281685d698ae",
"classsparta_1_1NotificationSourceBase.html#abeff14e6f02aa2136dc8a299cfd32e6b",
"classsparta_1_1ParameterSet_1_1ParameterSetIterator.html#a299e40298622ac55f05bf6fe3de6444f",
"classsparta_1_1Pipeline.html#a776bd769fea9fae05356c85684c49e07",
"classsparta_1_1RootTreeNode.html#a508cb75a6d5dc182287ea67a675e8c3d",
"classsparta_1_1SpartaSharedPointer_1_1SpartaSharedPointerAllocator.html#a68d911e89e516720e62247be4907b38d",
"classsparta_1_1SyncInPort.html#aaf286c83494dd1bcf3317626c0d8994b",
"classsparta_1_1TreeNode.html#ac58ee3afd3ce00f3d8c42cd75a65c097",
"classsparta_1_1app_1_1DefaultValues.html#a8e1d3ea08a41f910247941fca67ae251",
"classsparta_1_1app_1_1Simulation.html#ae5a2810562889b8eb9861d746dd7e982",
"classsparta_1_1collection_1_1PipelineCollector.html#ae29db33a450c8c52ecbd483cb907b289",
"classsparta_1_1memory_1_1DebugMemoryIF.html#afec5c7bd3d39673eacfea9c54341d768",
"classsparta_1_1statistics_1_1expression_1_1Expression.html",
"classsparta_1_1utils_1_1ValidValue.html#adb8e82e9e16f2643cb937d56a6b84228",
"namespacesparta_1_1statistics.html",
"structcore__example_1_1CPUTopology_1_1UnitInfo.html#a3ec70bd30a708eb70d33940ee7dabf1b",
"structsparta_1_1statistics_1_1expression_1_1UnaryFunction.html#aeb574b83f595ad60edded540dc1f324b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';